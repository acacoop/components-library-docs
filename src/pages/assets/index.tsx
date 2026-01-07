import { brandAssets } from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";

export function AssetsPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Assets</h1>
        <p className="text-lg text-slate-600">
          Logos y assets de marca de ACA para uso en todos los proyectos.
        </p>
      </section>

      {/* Brand Logos */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Logos de Marca
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo Icon */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center">
            <div className="bg-slate-100 rounded-lg p-8 mb-4">
              <img
                src={brandAssets.logoIcon}
                alt="Logo Icon"
                className="w-24 h-24 mx-auto"
              />
            </div>
            <h3 className="font-semibold mb-2">logoIcon</h3>
            <p className="text-sm text-slate-600 mb-4">
              Logo icono cuadrado. Ideal para favicons, avatars y espacios
              pequeños.
            </p>
            <code className="text-xs bg-slate-100 px-2 py-1 rounded">
              brandAssets.logoIcon
            </code>
          </div>

          {/* Logo Full Dark */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center">
            <div className="bg-slate-100 rounded-lg p-8 mb-4 flex items-center justify-center h-40">
              <img
                src={brandAssets.logoFullDark}
                alt="Logo Full Dark"
                className="max-h-24 max-w-full object-contain"
              />
            </div>
            <h3 className="font-semibold mb-2">logoFullDark</h3>
            <p className="text-sm text-slate-600 mb-4">
              Logo completo versión oscura (azul). Para usar sobre fondos
              claros.
            </p>
            <code className="text-xs bg-slate-100 px-2 py-1 rounded">
              brandAssets.logoFullDark
            </code>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Uso</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <CodeBlock
            code={`import { brandAssets } from '@acacoop/react-components-library';

// Usar en img tags
<img src={brandAssets.logoIcon} alt="ACA Logo" />
<img src={brandAssets.logoFullDark} alt="ACA Logo" />

// Usar como background
<div style={{ backgroundImage: \`url(\${brandAssets.logoIcon})\` }} />

// Los assets se exportan como data URLs, no necesitan
// configuración adicional de webpack/vite`}
            language="tsx"
          />
        </div>
      </section>

      {/* Guidelines */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Guías de Uso</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-green-600 mb-3">✓ Hacer</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Usar logoIcon para favicons y espacios pequeños</li>
                <li>• Usar logoFullDark sobre fondos claros y neutros</li>
                <li>• Mantener proporciones originales</li>
                <li>• Usar en contextos donde sea legible</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-3">✗ No hacer</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Distorsionar o estirar los logos</li>
                <li>• Agregar efectos o sombras adicionales</li>
                <li>• Modificar los colores del logo</li>
                <li>• Usar logos en tamaños muy pequeños</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
