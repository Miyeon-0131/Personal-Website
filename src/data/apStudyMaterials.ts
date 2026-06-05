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
  files: StudyFile[];
};

export const AP_STUDY_BASE_PATH = "/downloads/ap-study-materials";

export const apStudyFolders: StudyFolder[] = [
  {
    id: "ap-csp",
    nameEn: "AP CSP",
    nameZh: "AP 计算机科学原理",
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
      {
        id: "csp-handbook",
        filename: "ap-csp-handbook-testdaily-9.0.pdf",
        nameEn: "TestDaily AP CSP Handbook 9.0",
        nameZh: "TestDaily AP CSP 手册 9.0",
        size: 34732788,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-calculus-bc",
    nameEn: "AP Calculus BC",
    nameZh: "AP 微积分 BC",
    files: [
      {
        id: "calc-key-points",
        filename: "ap-calculus-bc-key-points.pdf",
        nameEn: "AP Calculus BC Key Points",
        nameZh: "AP 微积分 BC 要点",
        size: 327424,
        type: "pdf",
      },
      {
        id: "calc-handbook",
        filename: "ap-calculus-bc-handbook-testdaily-9.0.pdf",
        nameEn: "TestDaily AP Calculus BC Handbook 9.0",
        nameZh: "TestDaily AP 微积分 BC 手册 9.0",
        size: 62207444,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-chemistry",
    nameEn: "AP Chemistry",
    nameZh: "AP 化学",
    files: [
      {
        id: "chem-equations",
        filename: "ap-chemistry-equations-sheet.pdf",
        nameEn: "AP Chemistry Equations Sheet",
        nameZh: "AP 化学公式表",
        size: 954217,
        type: "pdf",
      },
      {
        id: "chem-handbook",
        filename: "ap-chemistry-handbook-testdaily-9.0.pdf",
        nameEn: "TestDaily AP Chemistry Handbook 9.0",
        nameZh: "TestDaily AP 化学手册 9.0",
        size: 71356909,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-physics-2",
    nameEn: "AP Physics 2",
    nameZh: "AP 物理 2",
    files: [
      {
        id: "phys2-equations",
        filename: "ap-physics-2-equations-sheet.pdf",
        nameEn: "AP Physics 2 Equations Sheet",
        nameZh: "AP 物理 2 公式表",
        size: 954433,
        type: "pdf",
      },
      {
        id: "phys2-handbook",
        filename: "ap-physics-2-handbook-testdaily-9.0.pdf",
        nameEn: "TestDaily AP Physics 2 Handbook 9.0",
        nameZh: "TestDaily AP 物理 2 手册 9.0",
        size: 63749566,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-physics-c-mechanics",
    nameEn: "AP Physics C: Mechanics",
    nameZh: "AP 物理 C：力学",
    files: [
      {
        id: "phyc-mech-equations",
        filename: "ap-physics-c-mechanics-equations-sheet.pdf",
        nameEn: "AP Physics C: Mechanics Equations Sheet",
        nameZh: "AP 物理 C 力学公式表",
        size: 523137,
        type: "pdf",
      },
      {
        id: "phyc-mech-handbook",
        filename: "ap-physics-c-mechanics-handbook-testdaily-9.0.pdf",
        nameEn: "TestDaily AP Physics C: Mechanics Handbook 9.0",
        nameZh: "TestDaily AP 物理 C 力学手册 9.0",
        size: 79613406,
        type: "pdf",
      },
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
  {
    id: "ap-physics-c-em",
    nameEn: "AP Physics C: E&M",
    nameZh: "AP 物理 C：电磁",
    files: [
      {
        id: "phyc-em-equations",
        filename: "ap-physics-c-em-equations-sheet.pdf",
        nameEn: "AP Physics C: E&M Equations Sheet",
        nameZh: "AP 物理 C 电磁公式表",
        size: 771591,
        type: "pdf",
      },
      {
        id: "phyc-em-handbook",
        filename: "ap-physics-c-em-handbook-testdaily-9.0.pdf",
        nameEn: "TestDaily AP Physics C: E&M Handbook 9.0",
        nameZh: "TestDaily AP 物理 C 电磁手册 9.0",
        size: 85852597,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-statistics",
    nameEn: "AP Statistics",
    nameZh: "AP 统计",
    files: [
      {
        id: "stats-formulas",
        filename: "ap-statistics-formula-tables-sheet.pdf",
        nameEn: "AP Statistics Formula Tables",
        nameZh: "AP 统计公式表",
        size: 3011914,
        type: "pdf",
      },
      {
        id: "stats-handbook",
        filename: "ap-statistics-handbook-testdaily-9.0.pdf",
        nameEn: "TestDaily AP Statistics Handbook 9.0",
        nameZh: "TestDaily AP 统计手册 9.0",
        size: 32859370,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-macroeconomics",
    nameEn: "AP Macroeconomics",
    nameZh: "AP 宏观经济",
    files: [
      {
        id: "macro-handbook",
        filename: "ap-macroeconomics-handbook-testdaily-9.0.pdf",
        nameEn: "TestDaily AP Macroeconomics Handbook 9.0",
        nameZh: "TestDaily AP 宏观经济手册 9.0",
        size: 77515610,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-microeconomics",
    nameEn: "AP Microeconomics",
    nameZh: "AP 微观经济",
    files: [
      {
        id: "micro-handbook",
        filename: "ap-microeconomics-handbook-testdaily-9.0.pdf",
        nameEn: "TestDaily AP Microeconomics Handbook 9.0",
        nameZh: "TestDaily AP 微观经济手册 9.0",
        size: 93863514,
        type: "pdf",
      },
    ],
  },
  {
    id: "ap-english-language",
    nameEn: "AP English Language",
    nameZh: "AP 英语语言与写作",
    files: [
      {
        id: "eng-handbook",
        filename: "ap-english-language-handbook-testdaily-9.0.pdf",
        nameEn: "TestDaily AP English Language Handbook 9.0",
        nameZh: "TestDaily AP 英语语言与写作手册 9.0",
        size: 48461729,
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

export function getStudyFileUrl(folderId: string, filename: string): string {
  return `${AP_STUDY_BASE_PATH}/${folderId}/${filename}`;
}
