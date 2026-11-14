import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, MousePointer, FolderUp, CheckCircle2 } from 'lucide-react';

export function GitHubUploadGuide() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="p-6 rounded-lg bg-blue-500/5 border border-blue-500/20">
        <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-3">
          <MousePointer size={24} className="text-blue-400" />
          Как найти кнопку "uploading an existing file"
        </h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-200 mb-2">Откройте репозиторий</h3>
              <p className="text-gray-400 mb-3">
                Перейдите по ссылке:{' '}
                <a
                  href="https://github.com/Vladimir061125/Konstruktor_analogov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  github.com/Vladimir061125/Konstruktor_analogov
                  <ExternalLink size={12} className="inline ml-1" />
                </a>
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-200 mb-2">
                Найдите блок "Quick setup" или пустое состояние
              </h3>
              <p className="text-gray-400 mb-3">
                Если репозиторий пустой, вы увидите большую область с заголовком{' '}
                <code className="text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded">
                  Quick setup
                </code>{' '}
                или сообщение о том, что репозиторий пуст.
              </p>
              <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-sm">
                <p className="text-gray-300 mb-2">
                  <strong>Вариант А:</strong> Если видите "Quick setup" — ищите ссылку{' '}
                  <span className="text-green-400 font-medium">
                    "uploading an existing file"
                  </span>{' '}
                  прямо под ним.
                </p>
                <p className="text-gray-300">
                  <strong>Вариант Б:</strong> Если видите пустое состояние — кнопка будет в центре
                  страницы с иконкой загрузки.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-200 mb-2">Нажмите на ссылку</h3>
              <p className="text-gray-400 mb-3">
                Кликните на{' '}
                <span className="text-green-400 font-medium">"uploading an existing file"</span> —
                это синяя ссылка (не кнопка!).
              </p>
              <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <FolderUp size={18} className="text-blue-400" />
                  <span className="text-green-400 underline">uploading an existing file</span>
                  <ArrowRight size={14} className="text-gray-500" />
                  <span className="text-gray-400">Откроется страница загрузки файлов</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              4
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-200 mb-2">Загрузите файлы</h3>
              <p className="text-gray-400 mb-3">
                Перетащите файлы в область загрузки или нажмите "choose your files" для выбора.
              </p>
              <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-sm">
                <p className="text-gray-300 mb-2">
                  <strong>Что загрузить:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Все файлы проекта (src/, prisma/, scripts/, docs/)</li>
                  <li>README.md</li>
                  <li>package.json, package-lock.json</li>
                  <li>tsconfig.json, vite.config.js</li>
                  <li>index.html</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              5
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-200 mb-2">Подтвердите загрузку</h3>
              <p className="text-gray-400 mb-3">
                Прокрутите вниз и нажмите зелёную кнопку{' '}
                <code className="text-green-300 bg-green-500/10 px-2 py-0.5 rounded">
                  Commit changes
                </code>
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-400" />
                <span className="text-sm text-gray-300">
                  Готово! Файлы появятся в репозитории.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative */}
        <div className="mt-6 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
          <h4 className="font-medium text-amber-300 mb-2">💡 Альтернатива: через "Add file"</h4>
          <p className="text-sm text-gray-400 mb-2">
            Если не нашли "uploading an existing file", используйте кнопку{' '}
            <code className="text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded">Add file</code> в
            правом верхнем углу страницы репозитория.
          </p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-400">
            <li>
              Нажмите <code className="text-blue-300">Add file</code> →{' '}
              <code className="text-blue-300">Upload files</code>
            </li>
            <li>Выберите файлы или перетащите их</li>
            <li>
              Нажмите <code className="text-green-300">Commit changes</code>
            </li>
          </ol>
        </div>
      </div>
    </motion.section>
  );
}
