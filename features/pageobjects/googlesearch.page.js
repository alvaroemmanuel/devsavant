const Page = require('./page');

class GoogleSearchPage extends Page {
    get searchField () {
        return $('[name="q"]');
    }

    get luckyButton () {
        return $('[name="btnI"]');
    }

    async feelingLuckySearch(keyword) {
      await this.searchField.setValue(keyword);
      await browser.pause(1000);
      await this.luckyButton.click();
    }

    visit (page) {
      return super.visit(page)
    }
}

module.exports = new GoogleSearchPage();
