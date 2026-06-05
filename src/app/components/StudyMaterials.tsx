import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  Folder,
  FileText,
  FileType,
  Download,
  ChevronRight,
  ChevronDown,
  Search,
  ArrowUp,
  FolderOpen,
} from "lucide-react";
import { useInViewOnScrollDown } from "@/app/components/ui/use-in-view-scroll-down";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  apStudyFolders,
  formatFileSize,
  getStudyFileUrl,
  type StudyFile,
  type StudyFolder,
} from "@/data/apStudyMaterials";

function FileIcon({ type }: { type: StudyFile["type"] }) {
  if (type === "docx") {
    return <FileType size={28} className="text-blue-600" />;
  }
  return <FileText size={28} className="text-red-500" />;
}

export function StudyMaterials() {
  const { t, locale } = useLanguage();
  const { ref, isVisible, transition } = useInViewOnScrollDown({
    margin: "-100px",
  });
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const folderName = (folder: StudyFolder) =>
    locale === "zh" ? folder.nameZh : folder.nameEn;

  const fileName = (file: StudyFile) =>
    locale === "zh" ? file.nameZh : file.nameEn;

  const currentFolder = useMemo(
    () => apStudyFolders.find((folder) => folder.id === currentFolderId) ?? null,
    [currentFolderId]
  );

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredFolders = useMemo(() => {
    if (!normalizedQuery) return apStudyFolders;
    return apStudyFolders.filter((folder) => {
      const folderMatches = folderName(folder).toLowerCase().includes(normalizedQuery);
      const fileMatches = folder.files.some(
        (file) =>
          fileName(file).toLowerCase().includes(normalizedQuery) ||
          file.filename.toLowerCase().includes(normalizedQuery)
      );
      return folderMatches || fileMatches;
    });
  }, [normalizedQuery, locale]);

  const visibleFiles = useMemo(() => {
    if (!currentFolder) return [];
    if (!normalizedQuery) return currentFolder.files;
    return currentFolder.files.filter(
      (file) =>
        fileName(file).toLowerCase().includes(normalizedQuery) ||
        file.filename.toLowerCase().includes(normalizedQuery)
    );
  }, [currentFolder, normalizedQuery, locale]);

  const breadcrumb = currentFolder
    ? [t.studyMaterials.rootLabel, folderName(currentFolder)]
    : [t.studyMaterials.rootLabel];

  const openFolder = (folderId: string | null) => {
    setCurrentFolderId(folderId);
    setSearchQuery("");
  };

  return (
    <section
      id="study-materials"
      className="py-24 px-6 bg-gray-50 border-t border-gray-100"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition({ duration: 0.8 })}
          className="mb-10"
        >
          <p className="text-sm font-medium text-emerald-700 mb-2">
            {t.studyMaterials.badge}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            {t.studyMaterials.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            {t.studyMaterials.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-[280px_1fr] gap-6 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition({ duration: 0.8, delay: 0.15 })}
        >
          <aside className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-emerald-700 text-white font-semibold text-sm">
              {t.studyMaterials.treeTitle}
            </div>
            <div className="p-3 border-b border-gray-100">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.studyMaterials.searchTree}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
              </div>
            </div>
            <nav className="p-2 max-h-[420px] overflow-y-auto text-sm">
              <button
                type="button"
                onClick={() => openFolder(null)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left hover:bg-gray-50 ${
                  currentFolderId === null ? "bg-emerald-50 text-emerald-800" : ""
                }`}
              >
                <ChevronDown size={16} className="shrink-0 text-gray-500" />
                <FolderOpen size={16} className="shrink-0 text-amber-600" />
                <span>{t.studyMaterials.apRoot}</span>
              </button>

              {
                <ul className="ml-4 border-l border-gray-100">
                  {filteredFolders.map((folder) => (
                    <li key={folder.id}>
                      <button
                        type="button"
                        onClick={() => openFolder(folder.id)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left hover:bg-gray-50 ${
                          currentFolderId === folder.id
                            ? "bg-emerald-50 text-emerald-800"
                            : ""
                        }`}
                      >
                        <Folder size={16} className="shrink-0 text-amber-600" />
                        <span className="truncate">{folderName(folder)}</span>
                        <span className="ml-auto text-xs text-gray-400">
                          {folder.files.length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              }
            </nav>
          </aside>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden min-h-[520px] flex flex-col">
            <div className="px-5 py-3 bg-violet-700 text-white flex items-center gap-2 font-semibold">
              <FolderOpen size={18} />
              <span>{currentFolder ? folderName(currentFolder) : t.studyMaterials.rootLabel}</span>
            </div>

            <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
              <div className="flex items-center gap-1 text-sm text-gray-500 flex-wrap">
                {breadcrumb.map((crumb, index) => (
                  <span key={`${crumb}-${index}`} className="flex items-center gap-1">
                    {index > 0 && <ChevronRight size={14} />}
                    <span>{crumb}</span>
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openFolder(null)}
                  disabled={currentFolderId === null}
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50 inline-flex items-center gap-2"
                >
                  <ArrowUp size={16} />
                  {t.studyMaterials.up}
                </button>
              </div>
            </div>

            <div className="p-4 border-b border-gray-100">
              <div className="relative max-w-md">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.studyMaterials.searchFiles}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                />
              </div>
            </div>

            <div className="p-5 flex-1">
              {!currentFolder ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredFolders.map((folder) => (
                    <button
                      key={folder.id}
                      type="button"
                      onClick={() => openFolder(folder.id)}
                      className="group text-left bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500" />
                      <div className="flex items-start gap-3 pl-2">
                        <Folder
                          size={32}
                          className="text-amber-600 shrink-0 group-hover:scale-105 transition-transform"
                        />
                        <div className="min-w-0">
                          <p className="font-semibold text-gray-900 truncate">
                            {folderName(folder)}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {folder.files.length} {t.studyMaterials.files}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : visibleFiles.length === 0 ? (
                <p className="text-gray-500 text-center py-16">
                  {t.studyMaterials.noResults}
                </p>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {visibleFiles.map((file) => (
                    <div
                      key={file.id}
                      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500" />
                      <div className="flex items-start gap-3 pl-2 flex-1">
                        <FileIcon type={file.type} />
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-gray-900 leading-snug">
                            {fileName(file)}
                          </p>
                          <p className="text-xs text-gray-400 mt-2 uppercase">
                            {file.type}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                      </div>
                      <a
                        href={getStudyFileUrl(currentFolder.id, file.filename)}
                        download
                        className="mt-4 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
                      >
                        <Download size={16} />
                        {t.studyMaterials.download}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
