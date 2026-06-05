export type StudyFileType = "pdf" | "docx";

export type StudyFile = {
  id: string;
  filename: string;
  nameEn: string;
  nameZh: string;
  size: number;
  type: StudyFileType;
};

export type StudyFolder = {
  id: string;
  nameEn: string;
  nameZh: string;
  storagePath: string;
  files?: StudyFile[];
  children?: StudyFolder[];
};

export const AP_STUDY_BASE_PATH = "/downloads/ap-study-materials";

export const apStudyFolders: StudyFolder[] = [
  {
    id: "ap-csp",
    nameEn: "AP CSP",
    nameZh: "AP 计算机科学原理",
    storagePath: "ap-csp",
    files: [
      {
        id: "csp-wr",
        filename: "apcsp-wr-review.docx",
        nameEn: "AP CSP Written Response Review",
        nameZh: "AP CSP 书面回答复习讲义",
        size: 27519,
        type: "docx",
      },
      {
        id: "csp-vocab",
        filename: "ap-csp-vocab.pdf",
        nameEn: "AP CSP Vocabulary",
        nameZh: "AP CSP 词汇表",
        size: 105441,
        type: "pdf",
      },
      {
        id: "csp-units",
        filename: "apcsp-units-review.docx",
        nameEn: "AP CSP Units Review",
        nameZh: "AP CSP 单元复习",
        size: 106985,
        type: "docx",
      },
    ],
  },
  {
    id: "ap-calculus-bc",
    nameEn: "AP Calculus BC",
    nameZh: "AP 微积分 BC",
    storagePath: "ap-calculus-bc",
    files: [
      {
        id: "calc-key-points",
        filename: "ap-calculus-bc-key-points.pdf",
        nameEn: "AP Calculus BC Key Points",
        nameZh: "AP 微积分 BC 要点",
        size: 327424,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-chemistry",
    nameEn: "AP Chemistry",
    nameZh: "AP 化学",
    storagePath: "ap-chemistry",
    files: [
      {
        id: "chem-equations",
        filename: "ap-chemistry-equations-sheet.pdf",
        nameEn: "AP Chemistry Equations Sheet",
        nameZh: "AP 化学公式表",
        size: 954217,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-physics-2",
    nameEn: "AP Physics 2",
    nameZh: "AP 物理 2",
    storagePath: "ap-physics-2",
    files: [
      {
        id: "phys2-equations",
        filename: "ap-physics-2-equations-sheet.pdf",
        nameEn: "AP Physics 2 Equations Sheet",
        nameZh: "AP 物理 2 公式表",
        size: 954433,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-physics-c",
    nameEn: "AP Physics C",
    nameZh: "AP 物理 C",
    storagePath: "ap-physics-c",
    children: [
      {
        id: "ap-physics-c-mechanics",
        nameEn: "Mechanics",
        nameZh: "力学",
        storagePath: "ap-physics-c/mechanics",
        files: [
          {
            id: "phyc-mech-equations",
            filename: "ap-physics-c-mechanics-equations-sheet.pdf",
            nameEn: "AP Physics C: Mechanics Equations Sheet",
            nameZh: "AP 物理 C 力学公式表",
            size: 523137,
            type: "pdf",
          },
        ],
      },
      {
        id: "ap-physics-c-em",
        nameEn: "Electricity & Magnetism",
        nameZh: "电磁学",
        storagePath: "ap-physics-c/em",
        files: [
          {
            id: "phyc-em-equations",
            filename: "ap-physics-c-em-equations-sheet.pdf",
            nameEn: "AP Physics C: E&M Equations Sheet",
            nameZh: "AP 物理 C 电磁公式表",
            size: 771591,
            type: "pdf",
          },
        ],
      },
      {
        id: "ap-physics-c-textbook",
        nameEn: "Textbook",
        nameZh: "教材",
        storagePath: "ap-physics-c/textbook",
        files: [
          {
            id: "phyc-combined-textbook",
            filename: "ap-physics-c-mechanics-em-textbook.pdf",
            nameEn: "AP Physics C: Mechanics & E&M Textbook",
            nameZh: "AP 物理 C 力学与电磁学教材",
            size: 103882916,
            type: "pdf",
          },
        ],
      },
    ],
  },
  {
    id: "ap-statistics",
    nameEn: "AP Statistics",
    nameZh: "AP 统计",
    storagePath: "ap-statistics",
    files: [
      {
        id: "stats-formulas",
        filename: "ap-statistics-formula-tables-sheet.pdf",
        nameEn: "AP Statistics Formula Tables",
        nameZh: "AP 统计公式表",
        size: 3011914,
        type: "pdf",
      },
    ],
  },
];

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function getStudyFileUrl(storagePath: string, filename: string): string {
  return `${AP_STUDY_BASE_PATH}/${storagePath}/${filename}`;
}

export function findStudyFolder(
  folderId: string | null,
  folders: StudyFolder[] = apStudyFolders
): StudyFolder | null {
  if (!folderId) return null;
  for (const folder of folders) {
    if (folder.id === folderId) return folder;
    if (folder.children) {
      const match = findStudyFolder(folderId, folder.children);
      if (match) return match;
    }
  }
  return null;
}

export function findParentFolderId(
  folderId: string,
  folders: StudyFolder[] = apStudyFolders,
  parentId: string | null = null
): string | null | undefined {
  for (const folder of folders) {
    if (folder.id === folderId) return parentId;
    if (folder.children) {
      const found = findParentFolderId(folderId, folder.children, folder.id);
      if (found !== undefined) return found;
    }
  }
  return undefined;
}

function folderMatchesQuery(
  folder: StudyFolder,
  query: string,
  locale: "en" | "zh"
): boolean {
  const name = locale === "zh" ? folder.nameZh : folder.nameEn;
  if (name.toLowerCase().includes(query)) return true;
  if (folder.files?.some((file) => {
    const fileLabel = locale === "zh" ? file.nameZh : file.nameEn;
    return (
      fileLabel.toLowerCase().includes(query) ||
      file.filename.toLowerCase().includes(query)
    );
  })) {
    return true;
  }
  return (
    folder.children?.some((child) => folderMatchesQuery(child, query, locale)) ??
    false
  );
}

export function filterStudyFolders(
  folders: StudyFolder[],
  query: string,
  locale: "en" | "zh"
): StudyFolder[] {
  if (!query) return folders;
  return folders.filter((folder) => folderMatchesQuery(folder, query, locale));
}

export function getFolderItemCount(folder: StudyFolder): number {
  if (folder.children) return folder.children.length;
  return folder.files?.length ?? 0;
}

export function getBreadcrumb(
  folderId: string,
  locale: "en" | "zh"
): StudyFolder[] {
  const trail: StudyFolder[] = [];
  const walk = (folders: StudyFolder[], ancestors: StudyFolder[]): boolean => {
    for (const folder of folders) {
      const nextAncestors = [...ancestors, folder];
      if (folder.id === folderId) {
        trail.push(...nextAncestors);
        return true;
      }
      if (folder.children && walk(folder.children, nextAncestors)) return true;
    }
    return false;
  };
  walk(apStudyFolders, []);
  return trail;
}
