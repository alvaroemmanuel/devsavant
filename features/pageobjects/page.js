module.exports = class Page {
  visit(page) {
    return browser.url(`https://${page}/`)
  }
}
