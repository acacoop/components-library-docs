import {
  Button,
  Spinner,
  Heading,
  Text,
  Caption,
  COLORS,
} from "@acacoop/react-components-library";
import { CodeBlock } from "../../components/CodeBlock";

export function PrimitivesPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Primitivos</h1>
        <p className="text-lg text-slate-600">
          Bloques de construcción elementales. Estos son los componentes más
          básicos que se usan para construir interfaces.
        </p>
      </section>

      {/* Button */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Button</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Variantes</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tamaños</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Estados</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
            </div>
          </div>

          <CodeBlock
            code={`import { Button } from '@acacoop/react-components-library';

// Variantes
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>

// Tamaños
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Estados
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}
            language="tsx"
          />
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Typography</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div className="space-y-4">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
          </div>

          <div className="space-y-2">
            <Text size="lg">Text Large - Para párrafos destacados</Text>
            <Text size="md">Text Medium - Para párrafos normales</Text>
            <Text size="sm">Text Small - Para texto secundario</Text>
            <Caption>Caption - Para etiquetas y texto pequeño</Caption>
          </div>

          <div className="space-y-2">
            <Text color="primary">Color Primary</Text>
            <Text color="secondary">Color Secondary</Text>
            <Text color="muted">Color Muted</Text>
            <Text color="success">Color Success</Text>
            <Text color="error">Color Error</Text>
            <Text color="warning">Color Warning</Text>
          </div>

          <CodeBlock
            code={`import { Heading, Text, Caption, Label } from '@acacoop/react-components-library';

// Headings
<Heading level={1}>Heading 1</Heading>
<Heading level={2}>Heading 2</Heading>

// Text
<Text size="lg">Large text</Text>
<Text size="md">Medium text</Text>
<Text size="sm">Small text</Text>

// Caption
<Caption>Small caption text</Caption>

// Colors
<Text color="primary">Primary</Text>
<Text color="error">Error</Text>`}
            language="tsx"
          />
        </div>
      </section>

      {/* Spinner */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Spinner</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Tamaños</h3>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <Spinner size="sm" />
                <p className="text-sm text-slate-500 mt-2">sm</p>
              </div>
              <div className="text-center">
                <Spinner size="md" />
                <p className="text-sm text-slate-500 mt-2">md</p>
              </div>
              <div className="text-center">
                <Spinner size="lg" />
                <p className="text-sm text-slate-500 mt-2">lg</p>
              </div>
              <div className="text-center">
                <Spinner size="xl" />
                <p className="text-sm text-slate-500 mt-2">xl</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Colores</h3>
            <div className="flex items-center gap-8">
              <Spinner color={COLORS.primary} />
              <Spinner color={COLORS.secondary} />
              <Spinner color={COLORS.success} />
              <Spinner color={COLORS.error} />
            </div>
          </div>

          <CodeBlock
            code={`import { Spinner, COLORS } from '@acacoop/react-components-library';

// Tamaños
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />

// Colores
<Spinner color={COLORS.primary} />
<Spinner color={COLORS.secondary} />
<Spinner color="#custom-color" />`}
            language="tsx"
          />
        </div>
      </section>
    </div>
  );
}
