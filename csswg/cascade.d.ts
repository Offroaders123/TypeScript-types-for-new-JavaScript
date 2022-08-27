
// CSS Cascading and Inheritance
// Specification: https://drafts.csswg.org/css-cascade-5/
// Repository: https://github.com/w3c/csswg-drafts/blob/main/css-cascade-5

declare class CSSLayerBlockRule extends CSSGroupingRule {
	readonly name: string;
}

declare class CSSLayerStatementRule extends CSSRule {
	readonly nameList: ReadonlyArray<string>;
}
