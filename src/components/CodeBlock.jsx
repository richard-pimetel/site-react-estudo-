
import React from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CodeBlock = ({ code, language = "jsx", title }) => {
  const [copied, setCopied] = React.useState(false);
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      title: "Código copiado!",
      description: "O código foi copiado para a área de transferência.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative my-6 rounded-lg overflow-hidden"
    >
      {title && (
        <div className="bg-gray-900 text-gray-200 px-4 py-2 text-sm font-mono border-b border-gray-700">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className="code-block !m-0 !rounded-t-none">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default CodeBlock;
