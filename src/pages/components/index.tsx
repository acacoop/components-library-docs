import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  StatCard,
  StatCardsGrid,
  LoadingOverlay,
} from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";
import { useState } from "react";

export function ComponentsPage() {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Componentes</h1>
        <p className="text-lg text-slate-600">
          Componentes compuestos construidos a partir de primitivos. Listos para
          usar en aplicaciones.
        </p>
      </section>

      {/* ButtonGroup */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">ButtonGroup</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Alineación</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 mb-2">align="left"</p>
                <ButtonGroup align="left">
                  <Button variant="outline">Cancelar</Button>
                  <Button variant="primary">Guardar</Button>
                </ButtonGroup>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-2">align="center"</p>
                <ButtonGroup align="center">
                  <Button variant="outline">Cancelar</Button>
                  <Button variant="primary">Guardar</Button>
                </ButtonGroup>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-2">align="right"</p>
                <ButtonGroup align="right">
                  <Button variant="outline">Cancelar</Button>
                  <Button variant="primary">Guardar</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

          <CodeBlock
            language="tsx"
            code={`
              import { ButtonGroup, Button } from '@acacoop/react-components-library';

              <ButtonGroup align="right" spacing="md">
                <Button variant="outline">Cancelar</Button>
                <Button variant="primary">Guardar</Button>
              </ButtonGroup>
            `}
          />
        </div>
      </section>

      {/* Card */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Card</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated">
              <CardHeader title="Elevated" subtitle="Con sombra" />
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Card con sombra para destacar contenido.
                </p>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardHeader title="Outlined" subtitle="Con borde" />
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Card con borde sutil para agrupar contenido.
                </p>
              </CardContent>
            </Card>

            <Card variant="flat">
              <CardHeader title="Flat" subtitle="Sin borde" />
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Card plana para secciones de contenido.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card variant="elevated" hoverable>
            <CardHeader
              title="Card con Footer"
              subtitle="Y efecto hover"
              action={
                <Button size="sm" variant="ghost">
                  ⋮
                </Button>
              }
            />
            <CardContent>
              <p className="text-slate-600">
                Esta card tiene header con acción, contenido y footer con
                botones.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Cancelar
              </Button>
              <Button variant="primary" size="sm">
                Confirmar
              </Button>
            </CardFooter>
          </Card>

          <CodeBlock
            language="tsx"
            code={`
              import { Card, CardHeader, CardContent, CardFooter, Button } from '@acacoop/react-components-library';

              <Card variant="elevated" hoverable>
                <CardHeader 
                  title="Título" 
                  subtitle="Subtítulo opcional"
                  action={<Button size="sm" variant="ghost">⋮</Button>}
                />
                <CardContent>
                  <p>Contenido de la card...</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Cancelar</Button>
                  <Button variant="primary">Confirmar</Button>
                </CardFooter>
              </Card>
            `}
          />
        </div>
      </section>

      {/* StatCard */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">StatCard</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <StatCardsGrid columns={4}>
            <StatCard
              label="Alertas Críticas"
              count={12}
              severity="high"
              icon={<span style={{ fontSize: 24 }}>⚠️</span>}
            />
            <StatCard
              label="Pendientes"
              count={45}
              severity="medium"
              icon={<span style={{ fontSize: 24 }}>⏳</span>}
            />
            <StatCard
              label="Completados"
              count={128}
              severity="low"
              icon={<span style={{ fontSize: 24 }}>✅</span>}
            />
            <StatCard
              label="Total"
              count={185}
              severity="neutral"
              icon={<span style={{ fontSize: 24 }}>📊</span>}
            />
          </StatCardsGrid>

          <div>
            <h3 className="font-semibold mb-4">Estado de carga</h3>
            <StatCardsGrid columns={3}>
              <StatCard
                label="Cargando..."
                count={0}
                severity="neutral"
                loading
              />
              <StatCard
                label="Cargando..."
                count={0}
                severity="neutral"
                loading
              />
              <StatCard
                label="Cargando..."
                count={0}
                severity="neutral"
                loading
              />
            </StatCardsGrid>
          </div>

          <CodeBlock
            language="tsx"
            code={`
              import { StatCard, StatCardsGrid } from '@acacoop/react-components-library';

              <StatCardsGrid columns={4}>
                <StatCard
                  label="Alertas Críticas"
                  count={12}
                  severity="high"
                  icon={<AlertIcon />}
                  onClick={() => console.log('clicked')}
                />
                <StatCard
    label="Pendientes"
    count={45}
    severity="medium"
    icon={<ClockIcon />}
  />
</StatCardsGrid>

// Severidades: "high" | "medium" | "low" | "neutral"`}
            language="tsx"
          />
        </div>
      </section>

      {/* LoadingOverlay */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          LoadingOverlay
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div>
            <Button onClick={() => setShowLoading(true)}>
              Mostrar LoadingOverlay (3s)
            </Button>
            {showLoading && (
              <LoadingOverlay
                message="Cargando datos..."
                visible={showLoading}
                fullScreen
              />
            )}
            {showLoading && setTimeout(() => setShowLoading(false), 3000)}
          </div>

          <div className="relative h-48 bg-slate-100 rounded-lg overflow-hidden">
            <LoadingOverlay message="Cargando..." visible fullScreen={false} />
          </div>

          <CodeBlock
            language="tsx"
            code={`
              import { LoadingOverlay } from '@acacoop/react-components-library';

              // Fullscreen
              <LoadingOverlay 
                message="Cargando datos..." 
                visible={isLoading}
                fullScreen
              />

              // Dentro de un contenedor
              <div className="relative">
                <LoadingOverlay 
                  message="Procesando..." 
                  visible={isLoading}
                  fullScreen={false}
                  transparent
                />
                {/* contenido */}
              </div>
            `}
          />
        </div>
      </section>
    </div>
  );
}

// Mantener compatibilidad con rutas antiguas
export { ComponentsPage as ComponentsListPage };
