import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-950">
      <LiquidMetalButton size="sm">Small</LiquidMetalButton>
      <LiquidMetalButton size="md">Click me</LiquidMetalButton>
      <LiquidMetalButton size="lg">Large button</LiquidMetalButton>
    </main>
  );
}
