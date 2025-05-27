import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ConceitosBasicosHooks from "@/pages/hooks/sections/ConceitosBasicosHooks";
import ExemplosPraticosHooks from "@/pages/hooks/sections/ExemplosPraticosHooks";
import HooksAvancados from "@/pages/hooks/sections/HooksAvancados";

const HooksPage = () => {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Hooks no React</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Hooks são funções especiais que permitem que você "conecte-se" aos recursos do React, como estado e ciclo de vida, em componentes funcionais. Aprenda como usar os hooks mais importantes para criar componentes poderosos.
        </p>
      </motion.div>

      <Tabs defaultValue="conceitos" className="mt-12">
        <TabsList className="mb-8">
          <TabsTrigger value="conceitos">Conceitos Básicos</TabsTrigger>
          <TabsTrigger value="exemplos">Exemplos Práticos</TabsTrigger>
          <TabsTrigger value="avancado">Hooks Avançados</TabsTrigger>
        </TabsList>

        <TabsContent value="conceitos">
          <ConceitosBasicosHooks />
        </TabsContent>

        <TabsContent value="exemplos">
          <ExemplosPraticosHooks />
        </TabsContent>

        <TabsContent value="avancado">
          <HooksAvancados />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HooksPage;