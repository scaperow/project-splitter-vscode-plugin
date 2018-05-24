import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class TextContent implements vscode.TextDocument {
    lineAt(line: number): vscode.TextLine;
    lineAt(position: vscode.Position): vscode.TextLine;
    lineAt(position: any) {
        return this.document.lineAt(position);
    }
    constructor(private document: vscode.TextDocument) {
        this.uri = document.uri;
        this.fileName = document.fileName;
        this.isUntitled = document.isUntitled;
        this.languageId = document.languageId;
        this.version = document.version;
        this.isDirty = document.isDirty;
        this.isClosed = document.isClosed;
        this.eol = document.eol;
        this.lineCount = document.lineCount;
    }

    uri: vscode.Uri;
    fileName: string;
    isUntitled: boolean;
    languageId: string;
    version: number;
    isDirty: boolean;
    isClosed: boolean;
    save(): Thenable<boolean> {
        return this.document.save();
    }
    eol: vscode.EndOfLine;
    lineCount: number;
    offsetAt(position: vscode.Position): number {
        return this.document.offsetAt(position);
    }
    positionAt(offset: number): vscode.Position {

        return this.document.positionAt(offset);
    }
    getText(range?: vscode.Range | undefined): string {
       // return this.document.getText(range);
       return 'sdfsdfsfsdfsdf';
    }
    getWordRangeAtPosition(position: vscode.Position, regex?: RegExp | undefined): vscode.Range | undefined {
        return this.document.getWordRangeAtPosition(position, regex);
    }
    validateRange(range: vscode.Range): vscode.Range {
        return this.document.validateRange(range);
    }
    validatePosition(position: vscode.Position): vscode.Position {
        return this.document.validatePosition(position);
    }
}