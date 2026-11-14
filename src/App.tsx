import { useState } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { GitHubUploadGuide } from './components/GitHubUploadGuide';
import { UploadDisabledFix } from './components/UploadDisabledFix';
import {
  Package,
  GitBranch,
  Terminal,
  CheckCircle2,
  FileCode,
  Database,
  Shield,
  Clock,
  Copy,
  ChevronDown,
  ChevronRight,
  Github,
  AlertTriangle,
  BookOpen,
  Zap,
  FolderTree,
  History,
  Rocket,
  ExternalLink,
} from 'lucide-react';

function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-3">
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs"
        >
          <Copy size={12} />
          {copied ? 'Скопировано!' : 'Копировать'}
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono border border-gray-700">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
          <Icon size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-800 transition-colors text-left"
      >
        <span className="font-medium text-gray-200">{title}</span>
        {isOpen ? (
          <ChevronDown size={18} className="text-gray-400" />
        ) : (
          <ChevronRight size={18} className="text-gray-400" />
        )}
      </button>
      {isOpen && <div className="p-4 bg-gray-900/30 border-t border-gray-700">{children}</div>}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                v0.5-trizam-2026-11-06
              </div>
              <a
                href="https://github.com/Vladimir061125/Konstruktor_analogov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 text-sm transition-colors"
              >
                <Github size={14} />
                GitHub
                <ExternalLink size={12} />
              </a>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Конструктор подбора{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                аналогов АТОС
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mb-6">
              Пакет для публикации проекта на GitHub. Содержит полный исходный код,
              историю коммитов и скрипт автоматической публикации в репозиторий{' '}
              <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">
                Vladimir061125/Konstruktor_analogov
              </code>
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#publish"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
              >
                <Rocket size={18} />
                Опубликовать
              </a>
              <a
                href="#structure"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-medium transition-colors"
              >
                <FolderTree size={18} />
                Структура проекта
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap gap-2 text-sm">
          {[
            { href: '#about', label: 'О пакете', icon: Package },
            { href: '#structure', label: 'Структура', icon: FolderTree },
            { href: '#publish', label: 'Публикация', icon: GitBranch },
            { href: '#verify', label: 'Проверка', icon: CheckCircle2 },
            { href: '#run', label: 'Запуск', icon: Zap },
            { href: '#history', label: 'Коммиты', icon: History },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-gray-800 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* About Package */}
        <Section id="about" title="Состав пакета" icon={Package}>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: 'konstruktor_analogov.bundle',
                size: '1.3 MB',
                desc: 'Git-бандл с полной историей коммитов (6 шт.)',
                icon: GitBranch,
              },
              {
                name: 'konstruktor_analogov_src.zip',
                size: '1.1 MB',
                desc: 'Zip-архив исходников (без node_modules)',
                icon: Package,
              },
              {
                name: 'push_to_github.sh',
                size: '4 KB',
                desc: 'Bash-скрипт автоматизации публикации',
                icon: Terminal,
              },
              {
                name: 'README_TRANSFER.md',
                size: '—',
                desc: 'Эта инструкция для ассистента',
                icon: BookOpen,
              },
            ].map((file) => (
              <div
                key={file.name}
                className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <file.icon size={20} className="text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono text-sm text-blue-300">{file.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{file.size}</div>
                    <div className="text-sm text-gray-400 mt-1">{file.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Structure */}
        <Section id="structure" title="Что внутри кода (135 файлов)" icon={FolderTree}>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                icon: FileCode,
                title: 'src/',
                desc: 'Next.js 16 приложение: 5 вкладок UI + 7 API-маршрутов',
              },
              {
                icon: Database,
                title: 'prisma/schema.prisma',
                desc: '4 таблицы БД',
              },
              {
                icon: Database,
                title: 'db/custom.db',
                desc: 'SQLite с seed-данными (4 позиции АТОС + 13 алиасов + 3 «аналога НЕТ»)',
              },
              {
                icon: FileCode,
                title: 'scripts/constructor_analogov.py',
                desc: 'Python-реализация (1018 строк), работает без Node.js',
              },
              {
                icon: FileCode,
                title: 'scripts/seed.ts',
                desc: 'Засев базы данных',
              },
              {
                icon: CheckCircle2,
                title: 'scripts/test_mk30_repro.ts',
                desc: 'Эталонный тест (6/6 проходит)',
              },
              {
                icon: FileCode,
                title: 'scripts/import_trizam_pdf.py',
                desc: 'Парсер ТРИЗАМ PDF → БД',
              },
              {
                icon: FileCode,
                title: 'scripts/gen_seed_drawings.py',
                desc: 'Генератор PNG-заглушек чертежей',
              },
              {
                icon: FileCode,
                title: 'scripts/atos_coverage.json',
                desc: 'Индекс покрытия чертежами',
              },
              {
                icon: FolderTree,
                title: 'download/chertezhi-atos/',
                desc: '4 PNG чертежа для seed-позиций',
              },
              {
                icon: FileCode,
                title: 'public/fonts/',
                desc: 'DejaVuSans.ttf + DejaVuSans-Bold.ttf — шрифты для кириллицы в PDF',
              },
              {
                icon: BookOpen,
                title: 'LONG_TERM_MEMORY.md',
                desc: 'Журнал уроков (6 записей)',
              },
              {
                icon: Shield,
                title: 'guardrails.md',
                desc: 'Правила работы',
              },
              {
                icon: BookOpen,
                title: 'README.md',
                desc: 'Основная документация',
              },
              {
                icon: BookOpen,
                title: 'docs/report.md',
                desc: 'Отчёт по этапам ТЗ',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors"
              >
                <item.icon size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-mono text-sm text-cyan-300">{item.title}</span>
                  <span className="text-sm text-gray-400 ml-2">— {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Upload Disabled Fix */}
        <UploadDisabledFix />

        {/* Publish Methods */}
        <Section id="publish" title="Как опубликовать (3 способа)" icon={GitBranch}>
          <AccordionItem title="Способ 1. Автоматический (рекомендуемый)" defaultOpen={true}>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>
                Скачайте{' '}
                <code className="text-blue-400 bg-blue-500/10 px-1 rounded">
                  konstruktor_analogov.bundle
                </code>{' '}
                и{' '}
                <code className="text-blue-400 bg-blue-500/10 px-1 rounded">
                  push_to_github.sh
                </code>{' '}
                в одну папку.
              </li>
              <li>Откройте терминал в этой папке.</li>
              <li>
                Запустите:
                <CodeBlock code="bash push_to_github.sh" />
              </li>
              <li>
                Введите логин <code className="text-yellow-300">Vladimir061125</code> и ваш PAT
                (Personal Access Token).
              </li>
            </ol>
            <p className="text-sm text-gray-400 mt-3">
              Скрипт сам распакует bundle, привяжет remote и запушит на GitHub.
            </p>
          </AccordionItem>

          <AccordionItem title="Способ 2. Ручной (через bundle)">
            <CodeBlock
              code={`git clone konstruktor_analogov.bundle Konstruktor_analogov
cd Konstruktor_analogov
git remote remove origin
git remote add origin https://github.com/Vladimir061125/Konstruktor_analogov.git
git push -u origin main`}
            />
          </AccordionItem>

          <AccordionItem title="Способ 3. Из zip (если bundle не подходит)">
            <CodeBlock
              code={`unzip konstruktor_analogov_src.zip -d Konstruktor_analogov
cd Konstruktor_analogov
git init
git add -A
git commit -m "v0.5-trizam-2026-11-06: Конструктор подбора аналогов АТОС"
git branch -M main
git remote add origin https://github.com/Vladimir061125/Konstruktor_analogov.git
git push -u origin main`}
            />
          </AccordionItem>

          {/* PAT Instructions */}
          <div className="mt-6 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
            <div className="flex items-start gap-3">
              <AlertTriangle size={20} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-300 mb-2">
                  Нужен Personal Access Token (PAT)
                </h4>
                <p className="text-sm text-gray-400 mb-3">
                  GitHub с 2021 года не принимает пароль для <code>git push</code>. Создайте токен:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-400">
                  <li>
                    На GitHub:{' '}
                    <span className="text-gray-300">
                      Settings → Developer settings → Personal access tokens → Tokens (classic)
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-300">Generate new token (classic)</span>
                  </li>
                  <li>
                    Note: <code className="text-blue-400">Konstruktor push</code>
                  </li>
                  <li>
                    Expiration: <code className="text-blue-400">90 days</code>
                  </li>
                  <li>
                    Select scopes: галочка <code className="text-green-400">repo</code>
                  </li>
                  <li>Generate → скопировать токен (вида <code className="text-yellow-300">ghp_xxxxx...</code>)</li>
                  <li>Использовать как пароль при <code>git push</code></li>
                </ol>
                <div className="mt-3 p-2 rounded bg-red-500/10 border border-red-500/20">
                  <p className="text-xs text-red-300">
                    ⚠️ <strong>Безопасность</strong>: токен = пароль от аккаунта. Не пересылать в
                    чаты, не показывать.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* GitHub Upload Guide */}
        <GitHubUploadGuide />

        {/* Excluded Files */}
        <Section id="exclude" title="Что НЕ должно попасть в репозиторий" icon={Shield}>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { path: 'node_modules/', reason: 'устанавливается через npm install' },
              { path: '.next/', reason: 'сборка Next.js, генерируется' },
              { path: 'upload/', reason: 'исходные файлы заказчика' },
              { path: '.env', reason: 'конфигурация окружения (в репо только .env.example)' },
              {
                path: 'skills/, examples/, mini-services/, tests/',
                reason: 'служебное от Z.ai',
              },
            ].map((item) => (
              <div
                key={item.path}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50"
              >
                <span className="text-red-400 text-lg">✕</span>
                <div>
                  <code className="text-sm text-red-300">{item.path}</code>
                  <span className="text-sm text-gray-500 ml-2">— {item.reason}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Verify */}
        <Section id="verify" title="Проверка после публикации" icon={CheckCircle2}>
          <div className="space-y-3">
            {[
              {
                step: '1',
                text: (
                  <>
                    Откройте{' '}
                    <a
                      href="https://github.com/Vladimir061125/Konstruktor_analogov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      github.com/Vladimir061125/Konstruktor_analogov
                    </a>
                  </>
                ),
              },
              {
                step: '2',
                text: 'Должны быть 6 коммитов от Initial commit до feat: Python-реализация Конструктора.',
              },
              {
                step: '3',
                text: (
                  <>
                    В корне:{' '}
                    <code className="text-blue-300 bg-blue-500/10 px-1 rounded">README.md</code>,{' '}
                    <code className="text-blue-300 bg-blue-500/10 px-1 rounded">src/</code>,{' '}
                    <code className="text-blue-300 bg-blue-500/10 px-1 rounded">prisma/</code>,{' '}
                    <code className="text-blue-300 bg-blue-500/10 px-1 rounded">scripts/</code>,{' '}
                    <code className="text-blue-300 bg-blue-500/10 px-1 rounded">docs/</code>.
                  </>
                ),
              },
              {
                step: '4',
                text: 'README GitHub отрисует автоматически на главной странице репозитория.',
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold shrink-0">
                  {item.step}
                </div>
                <p className="text-gray-300 pt-0.5">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
            <h4 className="font-medium text-green-300 mb-2">API-проверка версии</h4>
            <CodeBlock code='GET /api/version → {"version":"v0.5-trizam-2026-11-06","ok":true}' language="json" />
          </div>
        </Section>

        {/* Run After Clone */}
        <Section id="run" title="Как запустить после клонирования" icon={Zap}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3 flex items-center gap-2">
                <FileCode size={18} className="text-blue-400" />
                Node.js (Next.js)
              </h3>
              <CodeBlock
                code={`git clone https://github.com/Vladimir061125/Konstruktor_analogov.git
cd Konstruktor_analogov
npm install              # или: bun install
cp .env.example .env
npx prisma generate
npx prisma db push
npx tsx scripts/seed.ts
npm run dev              # → http://localhost:3000`}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-200 mb-3 flex items-center gap-2">
                <Terminal size={18} className="text-green-400" />
                Python (без Next.js)
              </h3>
              <CodeBlock
                code={`pip install python-docx openpyxl Pillow
python3 scripts/constructor_analogov.py test       # 6/6 эталонов
python3 scripts/constructor_analogov.py match "МК-30.5" -v
python3 scripts/constructor_analogov.py export заявка.txt --title "Ромашка"`}
              />
            </div>
          </div>
        </Section>

        {/* Commit History */}
        <Section id="history" title="История коммитов" icon={History}>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-700" />
            <div className="space-y-4">
              {[
                {
                  hash: '03024e7',
                  msg: 'feat: Python-реализация Конструктора (scripts/constructor_analogov.py)',
                  color: 'bg-purple-400',
                },
                {
                  hash: '5124649',
                  msg: 'docs(LTM): У-006 пользователь открывает старую preview-ссылку',
                  color: 'bg-blue-400',
                },
                {
                  hash: '1d5eb95',
                  msg: 'docs: LONG_TERM_MEMORY.md (5 уроков) + guardrails.md',
                  color: 'bg-blue-400',
                },
                {
                  hash: '86f7bad',
                  msg: 'chore: .env не входит в репозиторий (ТЗ раздел 6)',
                  color: 'bg-yellow-400',
                },
                {
                  hash: '6ebab92',
                  msg: 'v0.5-trizam-2026-11-06: каркас Конструктора по ТЗ',
                  color: 'bg-green-400',
                },
                {
                  hash: '62b600b',
                  msg: 'Initial commit',
                  color: 'bg-gray-400',
                },
              ].map((commit) => (
                <div key={commit.hash} className="relative flex items-start gap-4 pl-10">
                  <div
                    className={`absolute left-2.5 w-3 h-3 rounded-full ${commit.color} ring-4 ring-gray-900`}
                  />
                  <div className="flex-1 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
                    <div className="flex items-center gap-2 mb-1">
                      <code className="text-xs text-gray-500 font-mono">{commit.hash}</code>
                    </div>
                    <p className="text-sm text-gray-300">{commit.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Сообщения коммитов на русском, привязаны к этапам ТЗ. История линейная, без rebase.
          </p>
        </Section>

        {/* TZ Compliance */}
        <Section id="compliance" title="Связь с ТЗ" icon={BookOpen}>
          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300 mb-4">
              Полное соответствие ТЗ «Конструктор подбора аналогов АТОС» v0.5-trizam-2026-11-06:
            </p>
            <ul className="space-y-2">
              {[
                '5 этапов ТЗ отражены в docs/report.md',
                'Журнал инцидентов в LONG_TERM_MEMORY.md (6 записей)',
                'Правила работы в guardrails.md',
                'Самопроверки (ТЗ таблица 6): lint=0 ошибок, эталоны=6/6, /api/version=v0.5-trizam',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Contacts */}
        <Section id="contacts" title="Контакты" icon={ExternalLink}>
          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-gray-300">
              По вопросам наполнения каталога (реальные позиции АТОС, DIRAK, MESAN, ТРИЗАМ):
              дослать файлы в <code className="text-blue-400 bg-blue-500/10 px-1 rounded">upload/</code> —
              Конструктор подхватит их автоматически через импорт-скрипты.
            </p>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock size={16} className="text-gray-500" />
            <span className="text-sm text-gray-500">
              Версия v0.5-trizam-2026-11-06 • 135 файлов • 6 коммитов
            </span>
          </div>
          <a
            href="https://github.com/Vladimir061125/Konstruktor_analogov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
          >
            <Github size={16} />
            Vladimir061125/Konstruktor_analogov
          </a>
        </div>
      </footer>
    </div>
  );
}
