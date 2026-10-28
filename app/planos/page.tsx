'use client';
import React from 'react';
import Link from 'next/link';
import { PageWrapper } from '../components/Layout/PageWrapper';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { Reveal } from '../components/UI/Reveal';
import { Squares } from '../components/Effects/Squares';

const APP_STORE = 'https://apps.apple.com/br/app/pablife-app/id6756442379';
const GOOGLE_PLAY = 'https://play.google.com/store/apps/details?id=com.pablife.app';

const planos = [
  {
    nome: 'Lite',
    preco: '118',
    consultas: 1,
    img: '/estatua.png',
    accent: 'text-pink-400',
    border: 'border-pink-500/30 hover:border-pink-500/70',
    glow: 'bg-pink-500/25',
    shadow: 'hover:shadow-[0_10px_60px_-15px_rgba(236,72,153,0.6)]',
  },
  {
    nome: 'Plus',
    preco: '325',
    consultas: 3,
    img: '/woman.png',
    accent: 'text-green-400',
    border: 'border-green-400/30 hover:border-green-400/70',
    glow: 'bg-green-400/20',
    shadow: 'hover:shadow-[0_10px_60px_-15px_rgba(74,222,128,0.5)]',
  },
  {
    nome: 'Premium',
    preco: '509',
    consultas: 5,
    img: '/medusa-premium.png',
    accent: 'text-indigo-300',
    border: 'border-indigo-400/30 hover:border-indigo-400/70',
    glow: 'bg-indigo-400/25',
    shadow: 'hover:shadow-[0_10px_60px_-15px_rgba(129,140,248,0.6)]',
  },
];

export default function Planos() {
  return (
    <PageWrapper backgroundEffect={<Squares opacity={0.2} speed={0.5} />}>
      <div className="max-w-6xl mx-auto">
        <Reveal width="100%">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Nossos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_30px_rgba(255,0,85,0.4)]">
                Planos
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Todos os planos liberam o aplicativo completo. Escolha quantas consultas com psicólogos e nutricionistas você quer ter.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planos.map((p, i) => (
            <Card
              key={p.nome}
              className={`group flex flex-col overflow-hidden ${p.border} ${p.shadow}`}
            >
              <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[70px] opacity-40 group-hover:opacity-70 transition-opacity ${p.glow}`} />

              <div className="relative z-10 flex justify-center mb-6">
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  className="w-44 h-44 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <span className="relative z-10 font-mono text-xs text-pink-500 mb-2 block tracking-widest">
                0{i + 1} /// Plano
              </span>
              <h2 className={`relative z-10 text-3xl font-black uppercase tracking-tighter mb-4 ${p.accent}`}>
                {p.nome}
              </h2>

              <div className="relative z-10 flex items-baseline gap-1 mb-6">
                <span className="text-lg text-white/60 font-bold">R$</span>
                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">{p.preco}</span>
                <span className="text-lg text-white/60 font-bold">,00</span>
              </div>

              <ul className="relative z-10 space-y-3 mb-8 text-white/90 font-mono text-sm">
                <li className="flex items-center gap-3">
                  <span className={p.accent}>✓</span> Aplicativo completo
                </li>
                <li className="flex items-center gap-3">
                  <span className={p.accent}>✓</span>
                  {p.consultas} {p.consultas === 1 ? 'consulta' : 'consultas'}
                </li>
              </ul>

              <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="relative z-10 mt-auto block">
                <Button variant={i === 1 ? 'primary' : 'outline'} glow={i === 1} className="w-full">
                  Assinar no app
                </Button>
              </a>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <section className="text-center py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/20 to-transparent blur-3xl -z-10" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">
            A assinatura é feita pelo app
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
            Baixe o Pablife, escolha seu plano e agende suas consultas direto pelo celular.
          </p>
          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" glow size="lg">App Store</Button>
            </a>
            <a href={GOOGLE_PLAY} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">Google Play</Button>
            </a>
            <Link href="/contato">
              <Button variant="ghost" size="lg">Falar com Suporte</Button>
            </Link>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
