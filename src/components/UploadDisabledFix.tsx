import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, ExternalLink, Shield, LogIn, UserPlus, Terminal, ArrowRight } from 'lucide-react';

export function UploadDisabledFix() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="p-6 rounded-lg bg-red-500/5 border border-red-500/20">
        <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-3">
          <AlertTriangle size={24} className="text-red-400" />
          Ошибка: «Uploads are disabled»
        </h2>

        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 mb-6">
          <p className="text-red-300 font-mono text-sm">
            "File uploads require push access to this repository."
          </p>
        </div>

        <p className="text-gray-300 mb-6">
          Эта ошибка означает, что у вашего текущего аккаунта <strong>нет прав на запись</strong> (push access) в репозиторий.
          Вот 3 причины и решения:
        </p>

        {/* Причина 1 */}
        <div className="mb-6 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-200 mb-2">Вы не залогинены в GitHub</h3>
              <p className="text-gray-400 mb-3">
                Самая частая причина. Проверьте, вошли ли вы в свой аккаунт.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <LogIn size={16} className="text-blue-400" />
                  <span className="text-gray-300">
                    Посмотрите в правый верхний угол страницы GitHub — видите ли вы свой аватар?
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-green-400" />
                  <span className="text-gray-300">
                    Если нет — нажмите <code className="text-blue-300 bg-blue-500/10 px-1 rounded">Sign in</code> и войдите как <code className="text-yellow-300">Vladimir061125</code>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Причина 2 */}
        <div className="mb-6 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-200 mb-2">
                Репозиторий принадлежит не вам
              </h3>
              <p className="text-gray-400 mb-3">
                URL <code className="text-blue-300">github.com/Vladimir061125/Konstruktor_analogov</code> — 
                проверьте, что вы залогинены именно под аккаунтом <code className="text-yellow-300">Vladimir061125</code>.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span className="text-gray-300">
                    Кликните на свой аватар → должно быть <code className="text-green-300">Vladimir061125</code>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <AlertTriangle size={16} className="text-amber-400" />
                  <span className="text-gray-300">
                    Если вы залогинены под другим именем — выйдите и войдите под правильным аккаунтом
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Причина 3 */}
        <div className="mb-6 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-200 mb-2">
                Репозиторий ещё не создан
              </h3>
              <p className="text-gray-400 mb-3">
                Возможно, репозиторий <code className="text-blue-300">Konstruktor_analogov</code> ещё не существует.
                Нужно его создать.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <UserPlus size={16} className="text-blue-400" />
                  <span className="text-gray-300">
                    Перейдите:{' '}
                    <a
                      href="https://github.com/new"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      github.com/new
                      <ExternalLink size={12} className="inline ml-1" />
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-green-400" />
                  <span className="text-gray-300">
                    Repository name: <code className="text-yellow-300">Konstruktor_analogov</code>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ArrowRight size={14} className="text-green-400" />
                  <span className="text-gray-300">
                    Public → <code className="text-green-300">Create repository</code>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Быстрая проверка */}
        <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
          <h4 className="font-medium text-green-300 mb-3 flex items-center gap-2">
            <Shield size={18} />
            Быстрая проверка — выполните 3 шага:
          </h4>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">1</span>
              <div>
                <p className="text-gray-300">
                  Откройте{' '}
                  <a
                    href="https://github.com/settings/profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    github.com/settings/profile
                    <ExternalLink size={12} className="inline ml-1" />
                  </a>
                </p>
                <p className="text-sm text-gray-500">Убедитесь, что ваш username = <code className="text-yellow-300">Vladimir061125</code></p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">2</span>
              <div>
                <p className="text-gray-300">
                  Перейдите на{' '}
                  <a
                    href="https://github.com/Vladimir061125/Konstruktor_analogov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    github.com/Vladimir061125/Konstruktor_analogov
                    <ExternalLink size={12} className="inline ml-1" />
                  </a>
                </p>
                <p className="text-sm text-gray-500">Если видите «404» — репозиторий не создан, создайте его</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">3</span>
              <div>
                <p className="text-gray-300">
                  Если репозиторий открылся — нажмите кнопку <code className="text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded">Add file</code> → <code className="text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded">Upload files</code>
                </p>
                <p className="text-sm text-gray-500">Если кнопка есть и активна — всё работает!</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Альтернатива через терминал */}
        <div className="mt-6 p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
          <h4 className="font-medium text-purple-300 mb-3 flex items-center gap-2">
            <Terminal size={18} />
            Альтернатива: через терминал (если веб-загрузка не работает)
          </h4>
          <p className="text-sm text-gray-400 mb-3">
            Если через веб-интерфейс загрузка заблокирована, используйте git через терминал:
          </p>
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono border border-gray-700">
{`# Установите GitHub CLI (если нет)
# macOS: brew install gh
# Windows: winget install GitHub.cli

# Войдите через CLI
gh auth login

# Создайте репозиторий и запушьте
cd путь/к/вашему/проекту
git init
git add -A
git commit -m "v0.5-trizam-2026-11-06: Конструктор подбора аналогов АТОС"
gh repo create Konstruktor_analogov --public --source=. --push`}
          </pre>
        </div>
      </div>
    </motion.section>
  );
}
