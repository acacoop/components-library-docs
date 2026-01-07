import { Link } from "react-router-dom";
import { CodeBlock } from "../../components/CodeBlock";
import { Button, brandAssets, COLORS } from "@acacoop/components-library";

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center py-12">
        <img
          src={brandAssets.logoIcon}
          alt="ACA Logo"
          className="w-20 h-20 mx-auto mb-6"
        />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9100]/10 text-[#FF9100] text-sm font-medium mb-6">
          v1.2.0 - Latest
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Desarrollá más rápido con <br />
          <span className="text-[#FF9100]">ACA Components</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          Librería de componentes React para proyectos de ACA. TypeScript,
          CSS-in-JS y cero configuración.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant="primary"
            onClick={() => (window.location.hash = "#/primitives")}
          >
            Ver Primitives
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.hash = "#/components")}
          >
            Ver Components
          </Button>
        </div>
      </section>

      {/* Structure */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Estructura</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white font-bold"
              style={{ backgroundColor: COLORS.primary }}
            >
              P
            </div>
            <h3 className="font-bold text-lg mb-2">Primitivos</h3>
            <p className="text-slate-600 text-sm">
              Bloques de construcción: Botones, Tipografía, Spinners
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white font-bold"
              style={{ backgroundColor: COLORS.secondary }}
            >
              C
            </div>
            <h3 className="font-bold text-lg mb-2">Componentes</h3>
            <p className="text-slate-600 text-sm">
              Componentes compuestos: Tarjetas, Estadísticas, Grupos
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white font-bold"
              style={{ backgroundColor: COLORS.success }}
            >
              T
            </div>
            <h3 className="font-bold text-lg mb-2">Tokens</h3>
            <p className="text-slate-600 text-sm">
              Tokens de diseño: colores, espaciado, tipografía
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white font-bold"
              style={{ backgroundColor: COLORS.info }}
            >
              A
            </div>
            <h3 className="font-bold text-lg mb-2">Assets</h3>
            <p className="text-slate-600 text-sm">
              Logos y assets de marca de ACA
            </p>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Instalación</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9100] text-white font-bold text-sm">
                  1
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Configurar npm registry (solo para paquetes privados)
                </h3>
              </div>
              <div className="ml-11">
                <p className="text-slate-600 mb-3 text-sm">
                  Crear{" "}
                  <code className="bg-slate-100 px-2 py-1 rounded text-xs">
                    .npmrc
                  </code>{" "}
                  en la raíz del proyecto:
                </p>
                <CodeBlock
                  code={
                    "@acacoop:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}"
                  }
                  language="bash"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9100] text-white font-bold text-sm">
                  2
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Instalar el paquete
                </h3>
              </div>
              <div className="ml-11">
                <CodeBlock
                  code="npm install @acacoop/components-library"
                  language="bash"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9100] text-white font-bold text-sm">
                  3
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Usar los componentes
                </h3>
              </div>
              <div className="ml-11">
                <CodeBlock
                  code={`// Importar todo desde el paquete principal
import { Button, Card, COLORS, brandAssets } from '@acacoop/components-library';

// O importar desde submódulos específicos
import { Button, Spinner } from '@acacoop/components-library/primitives';
import { Card, StatCard } from '@acacoop/components-library/components';
import { colors, spacing } from '@acacoop/components-library/tokens';`}
                  language="tsx"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Explorar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/primitives"
            className="group bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#282D86] hover:shadow-md transition-all"
          >
            <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-[#282D86] transition-colors">
              Primitives
            </h3>
            <p className="text-slate-600">
              Button, Typography, Spinner - Los bloques de construcción más
              básicos
            </p>
          </Link>
          <Link
            to="/components"
            className="group bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#FF9100] hover:shadow-md transition-all"
          >
            <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-[#FF9100] transition-colors">
              Components
            </h3>
            <p className="text-slate-600">
              Card, StatCard, ButtonGroup - Componentes compuestos listos para
              usar
            </p>
          </Link>
          <Link
            to="/tokens"
            className="group bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#43A047] hover:shadow-md transition-all"
          >
            <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-[#43A047] transition-colors">
              Tokens
            </h3>
            <p className="text-slate-600">
              Colors, spacing, typography - Design tokens para consistencia
              visual
            </p>
          </Link>
          <Link
            to="/assets"
            className="group bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#039BE5] hover:shadow-md transition-all"
          >
            <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-[#039BE5] transition-colors">
              Assets
            </h3>
            <p className="text-slate-600">Logos y assets de marca de ACA</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
