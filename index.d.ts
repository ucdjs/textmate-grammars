/**
 * Absolute file paths to the TextMate grammar JSON files.
 */
export declare const grammars: {
  readonly core: string;
  readonly blocks: string;
  readonly arabic: string;
};

/**
 * The TextMate scope names defined within each grammar.
 */
export declare const scopes: {
  readonly core: "source.ucd.core";
  readonly blocks: "source.ucd.blocks";
  readonly arabic: "source.ucd.arabic";
};

declare const _default: {
  grammars: typeof grammars;
  scopes: typeof scopes;
};

export default _default;
