import CsvViewer from "@/components/general/csv-viewer";
import FilePicker from "@/components/general/file-picker";
import { Modal } from "@/components/general/modal";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import React, { ReactNode, useState } from "react";
import { bulkCreateCustomer } from "../../action";

type Props = {
  trigger: ReactNode;
};

const UploadModal = ({ trigger }: Props) => {
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);

  const fileChange = (file: File) => {
    setFile(file);
  };

  const uploadHandle = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    dispatch(bulkCreateCustomer(formData));
  };

  return (
    <Modal title="Upload Customer" trigger={trigger}>
      <div className="flex justify-between">
        <FilePicker
          onChange={fileChange}
          support=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
        <Button onClick={uploadHandle}>Upload</Button>
      </div>
      <div>
        {file && file?.name}
        {file && <CsvViewer csvFile={file} />}
      </div>
    </Modal>
  );
};

export default UploadModal;
