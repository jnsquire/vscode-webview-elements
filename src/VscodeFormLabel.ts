import { LitElement, html, css, customElement } from 'lit-element';

@customElement('vscode-form-label')
export class VscodeFormLabel extends LitElement {
  static get styles() {
    return css`
      :host {
        color: var(--vscode-foreground);
        cursor: default;
        display: block;
        font-family: var(--vscode-font-family);
        font-size: var(--vscode-font-size);
        font-weight: 600;
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        user-select: text;
        white-space: nowrap;
      }

      ::slotted(b) {
        font-weight: 600;
        opacity: 0.9;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
