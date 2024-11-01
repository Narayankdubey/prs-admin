import React, { FC, LazyExoticComponent, ReactNode, Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TabsProps = {
  data: {
    title: string;
    value: string;
    component: LazyExoticComponent<
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (props: Record<string, any>) => ReactNode
    >;
  }[];
  action?: ReactNode;
};

const CustomTabs: FC<TabsProps> = ({ data, action = null }) => {
  if (!Array.isArray(data)) return null;

  return (
    <Tabs defaultValue="account">
      <div className="flex justify-between">
        <TabsList>
          {data?.map((item) => (
            <TabsTrigger key={item?.value} value={item?.value}>
              {item?.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {action && action}
      </div>
      {data.map((item) => {
        // Load the component and pass any necessary props
        const Component = item?.component;

        return (
          <TabsContent key={item.value} value={item.value}>
            <Suspense fallback={<p>Loading...</p>}>
              {Component && <Component />}
            </Suspense>
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default CustomTabs;
