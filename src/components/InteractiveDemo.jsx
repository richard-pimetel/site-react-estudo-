
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import { Play, RefreshCw } from "lucide-react";

const InteractiveDemo = ({ title, description, initialCode, result: ResultComponent }) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [key, setKey] = useState(0);

  const resetDemo = () => {
    setKey(prev => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border rounded-lg overflow-hidden shadow-md my-8"
    >
      <div className="bg-gray-50 border-b p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>

      <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b px-4">
          <TabsList className="bg-transparent h-12">
            <TabsTrigger value="preview" className="data-[state=active]:bg-white">
              Visualização
            </TabsTrigger>
            <TabsTrigger value="code" className="data-[state=active]:bg-white">
              Código
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="p-4 min-h-[200px] flex flex-col">
          <div className="flex justify-end mb-4">
            <Button variant="outline" size="sm" onClick={resetDemo}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reiniciar
            </Button>
          </div>
          <div className="flex-1 flex items-center justify-center p-4 border rounded-lg bg-white">
            <ResultComponent key={key} />
          </div>
        </TabsContent>

        <TabsContent value="code" className="p-4">
          <div className="flex justify-end mb-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setActiveTab("preview")}
            >
              <Play className="h-4 w-4 mr-2" />
              Executar
            </Button>
          </div>
          <CodeBlock code={initialCode} language="jsx" />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default InteractiveDemo;
