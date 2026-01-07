import { colors, COLORS, spacing, borderRadius, shadow, fontSize, fontWeight } from "@acacoop/components-library";
import { CodeBlock } from "../../components/CodeBlock";

export function TokensPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Tokens de Diseño</h1>
        <p className="text-lg text-slate-600">
          Variables de diseño para mantener consistencia visual en todos los proyectos.
        </p>
      </section>

      {/* Colors */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Colores</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Colores de Marca</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="primary" color={COLORS.primary} />
              <ColorSwatch name="primaryHover" color={COLORS.primaryHover} />
              <ColorSwatch name="secondary" color={COLORS.secondary} />
              <ColorSwatch name="secondaryHover" color={COLORS.secondaryHover} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Colores de Estado</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="success" color={COLORS.success} />
              <ColorSwatch name="error" color={COLORS.error} />
              <ColorSwatch name="warning" color={COLORS.warning} />
              <ColorSwatch name="info" color={COLORS.info} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Colores de Texto</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="textPrimary" color={COLORS.textPrimary} />
              <ColorSwatch name="textSecondary" color={COLORS.textSecondary} />
              <ColorSwatch name="textMuted" color={COLORS.textMuted} />
              <ColorSwatch name="white" color={COLORS.white} border />
            </div>
          </div>

          <CodeBlock
            code={`import { COLORS, colors } from '@acacoop/components-library';

// Uso directo
<div style={{ backgroundColor: COLORS.primary }}>...</div>

// Acceso a paletas completas
colors.brand.primary      // "#282D86"
colors.status.success     // "#43A047"
colors.text.primary       // "#333333"
colors.neutral.gray500    // "#757575"`}
            language="tsx"
          />
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Spacing</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div className="space-y-2">
            {Object.entries(spacing).map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <code className="w-16 text-sm text-slate-600">{key}</code>
                <div
                  className="h-4 bg-blue-500 rounded"
                  style={{ width: value }}
                />
                <span className="text-sm text-slate-500">{value}</span>
              </div>
            ))}
          </div>

          <CodeBlock
            code={`import { spacing, gap, padding, margin } from '@acacoop/components-library';

// Uso
<div style={{ padding: spacing[4] }}>...</div>  // 16px
<div style={{ gap: gap.md }}>...</div>          // 16px
<div style={{ padding: padding.lg }}>...</div>  // 24px`}
            language="tsx"
          />
        </div>
      </section>

      {/* Border Radius */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Border Radius</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div className="flex flex-wrap gap-6">
            {Object.entries(borderRadius).map(([key, value]) => (
              <div key={key} className="text-center">
                <div
                  className="w-16 h-16 bg-blue-500 mx-auto mb-2"
                  style={{ borderRadius: value }}
                />
                <code className="text-xs text-slate-600">{key}</code>
                <p className="text-xs text-slate-400">{value}</p>
              </div>
            ))}
          </div>

          <CodeBlock
            code={`import { borderRadius } from '@acacoop/components-library';

<div style={{ borderRadius: borderRadius.md }}>...</div>  // 8px
<div style={{ borderRadius: borderRadius.lg }}>...</div>  // 12px
<div style={{ borderRadius: borderRadius.full }}>...</div> // 9999px`}
            language="tsx"
          />
        </div>
      </section>

      {/* Shadows */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Shadows</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div className="flex flex-wrap gap-8">
            {Object.entries(shadow).filter(([k]) => k !== 'none').map(([key, value]) => (
              <div key={key} className="text-center">
                <div
                  className="w-24 h-24 bg-white rounded-lg mx-auto mb-2"
                  style={{ boxShadow: value }}
                />
                <code className="text-xs text-slate-600">{key}</code>
              </div>
            ))}
          </div>

          <CodeBlock
            code={`import { shadow } from '@acacoop/components-library';

<div style={{ boxShadow: shadow.sm }}>...</div>
<div style={{ boxShadow: shadow.md }}>...</div>
<div style={{ boxShadow: shadow.lg }}>...</div>`}
            language="tsx"
          />
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Typography Tokens</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Font Sizes</h3>
            <div className="space-y-2">
              {Object.entries(fontSize).map(([key, value]) => (
                <div key={key} className="flex items-baseline gap-4">
                  <code className="w-16 text-sm text-slate-600">{key}</code>
                  <span style={{ fontSize: value }}>The quick brown fox</span>
                  <span className="text-sm text-slate-400">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Font Weights</h3>
            <div className="space-y-2">
              {Object.entries(fontWeight).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4">
                  <code className="w-24 text-sm text-slate-600">{key}</code>
                  <span style={{ fontWeight: value }}>The quick brown fox</span>
                  <span className="text-sm text-slate-400">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <CodeBlock
            code={`import { fontSize, fontWeight, fontFamily } from '@acacoop/components-library';

<p style={{ 
  fontSize: fontSize.lg,      // "18px"
  fontWeight: fontWeight.bold, // 700
  fontFamily: fontFamily.sans  // "Urbanist", ...
}}>
  Hello World
</p>`}
            language="tsx"
          />
        </div>
      </section>
    </div>
  );
}

function ColorSwatch({ name, color, border = false }: { name: string; color: string; border?: boolean }) {
  return (
    <div className="text-center">
      <div
        className="w-full h-16 rounded-lg mb-2"
        style={{ 
          backgroundColor: color,
          border: border ? '1px solid #e0e0e0' : undefined
        }}
      />
      <code className="text-xs text-slate-600">{name}</code>
      <p className="text-xs text-slate-400">{color}</p>
    </div>
  );
}
