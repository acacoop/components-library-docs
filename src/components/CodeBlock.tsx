import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

// Helper para limpiar indentación de template literals
function cleanCode(code: string): string {
  const lines = code.split("\n");

  // Eliminar líneas vacías al inicio y final
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();

  if (!lines.length) return "";

  // Encontrar la indentación mínima
  const minIndent = lines
    .filter((line) => line.trim())
    .map((line) => line.match(/^(\s*)/)?.[1].length ?? 0)
    .reduce((min, indent) => Math.min(min, indent), Infinity);

  // Remover la indentación común
  return lines.map((line) => line.slice(minIndent)).join("\n");
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cleanCode(code));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 px-3 py-1.5 text-xs font-medium text-white bg-slate-700 hover:bg-slate-600 rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          padding: "1rem",
        }}
      >
        {cleanCode(code)}
      </SyntaxHighlighter>
    </div>
  );
}
