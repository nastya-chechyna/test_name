let EC = protractor.ExpectedConditions;

export class CommonActions {

    restartBrowser() {
        browser.restart();
        browser.driver.manage().window().maximize();
    }

    maximizeBrowserWindow() {
        browser.driver.manage().window().maximize();
    }

    wait(timeoutInSeconds) {
        browser.sleep(timeoutInSeconds*1000);
    }

    executeScript(script, element) {
        browser.executeScript(script, element);
    }

    scrollToElement(element) {
        this.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
    }

    clickActions(element) {
        browser.actions().mouseMove(element).mouseDown().mouseUp().perform();
    }

    moveMouseToElement(element) {
        browser.actions().mouseMove(element).perform();
    }

    clickWithJs(element) {
        this.executeScript('arguments[0].click()', element.getWebElement());
    }

    waitForElementPresent(element, waitTime) {
        browser.wait(EC.presenceOf(element), waitTime*1000);
        browser.sleep(500);
    }

    waitForElementVisible(element, waitTime) {
        browser.wait(EC.visibilityOf(element), waitTime*1000);
        browser.sleep(500);
    }

    waitForElementClickable(element, waitTime) {
        browser.wait(EC.elementToBeClickable(element), waitTime*1000);
        browser.sleep(500);
    }

    isWebDriverElementPresent (welement) {
        return welement.isDisplayed().then(function (isDisplayedd) {
            return isDisplayedd;
        }).then(null, function (error) {
            return false;
        });
    }

    switchToNewNonAngularWindow() {
        browser.ignoreSynchronization = true;
        browser.driver.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]).then(function () {
                console.log('Switched to new window');
            });
        });
    }
}