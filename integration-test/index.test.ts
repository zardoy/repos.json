import { getUserReposJson } from '../src/'

test('Works', async () => {
    expect(await getUserReposJson('zardoy')).toMatchInlineSnapshot(`
Object {
  "electron-apps": Object {
    "repos": Array [
      "zardoy/advanced-youtube-downloader",
      "zardoy/filmomania",
      "zardoy/electron-tray-demo",
      "zardoy/auto-audio-device-select",
    ],
  },
  "npm-packages": Object {
    "color": "blue",
    "repos": Array [
      "zardoy/tsconfig",
      "zardoy/eslint-config",
      "zardoy/modify-json-file",
      "zardoy/github-remote-info",
      "zardoy/publish-action",
      "zardoy/typed-jsonfile",
      "zardoy/package-with-types",
      "zardoy/vscode-framework",
    ],
  },
  "vscode-extensions": Object {
    "repos": Array [
      "zardoy/vscode-keybindings",
      "zardoy/github-manager",
    ],
    "skipTesting": Array [
      "vscode-keybindings",
    ],
  },
  "websites": Object {
    "repos": Array [
      "zardoy/zardoy-site",
      "zardoy/tell-tale-about-borow",
      "zardoy/ggworlds.ru",
    ],
  },
}
`)
})
