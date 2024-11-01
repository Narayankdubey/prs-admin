// CsvViewer.tsx
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { DataTable } from "../data-table";

interface CsvViewerProps {
  csvUrl?: string;
  csvFile?: File | null;
}

const CsvViewer: React.FC<CsvViewerProps> = ({ csvUrl, csvFile }) => {
  const [data, setData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchCsv = async () => {
      const response = csvUrl ? await fetch(csvUrl) : csvFile;
      const csvText = await response.text();

      Papa.parse(csvText, {
        complete: (result) => {
          setHeaders(result.data[0] as string[]); // First row as headers
          setData(result.data.slice(1)); // Remaining rows as data
        },
        header: false,
      });
    };

    fetchCsv();
  }, [csvUrl]);

  return (
    <div className="max-h-96 overflow-auto">
    <DataTable
      columns={headers?.map((item) => ({ accessorKey: item }))}
      data={data}
    />
    </div>
  );
};

export default CsvViewer;
