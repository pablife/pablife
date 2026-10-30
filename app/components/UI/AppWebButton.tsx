import React from 'react';
import { clsx } from 'clsx';

export const APP_WEB_URL = 'https://app.pablife.com.br';

interface AppWebButtonProps {
  label?: string;
  className?: string;
}

/**
 * Botão de destaque que leva ao app web.
 * Borda em gradiente girando, brilho pulsando e um reflexo que passa pelo botão
 * (estilos em globals.css, classe .appweb-btn). Respeita "reduzir movimento".
 */
export function AppWebButton({ label = 'Acessar App Web', className }: AppWebButtonProps) {
  return (
    <a href={APP_WEB_URL} className={clsx('appweb-btn group', className)} aria-label={`${label} (app.pablife.com.br)`}>
      <span className="appweb-shine" aria-hidden="true" />
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
        <span className="appweb-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
      </span>
      <span className="relative">{label}</span>
      <span className="relative transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
    </a>
  );
}
