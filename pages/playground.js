import { expect } from "@playwright/test";

export class Playground {

    constructor(page) {

        this.page = page;

        this.url = 'playground/'

        this.clickableButton = this.page.locator('#btn-click-me');
        this.clickableButtonStatus = this.page.getByTestId('btn-state');

        this.initalStatus = 'Status: idle';
        this.clickedStatus = 'Status: clicked';

        this.timerButton = this.page.getByTestId('timer-btn');
        this.timerResult = this.page.getByTestId('timer-result');
        this.timerHeading = this.page.getByRole('heading', { name: 'Timer Button' });

        this.timerInitial = 'Waiting for click';
        this.timerProcessing = 'Processing...';
        this.timerComplete = 'Complete';

        this.buttonLoadTimeout = 7000;
    }

    async navigateTo() {
        await this.page.goto(this.url);
    }

    async clickButtonInGivenState(initial) {

        if (initial) {
            await expect(this.clickableButtonStatus).toContainText(this.initalStatus);
            await this.clickableButton.click();
            await expect(this.clickableButtonStatus).toContainText(this.clickedStatus);
        } else {
            await expect(this.clickableButtonStatus).toContainText(this.clickedStatus);
            await this.clickableButton.click();
            await expect(this.clickableButtonStatus).toContainText(this.initalStatus);
        }
    }


    async verifyTimerInitialState() {
        await expect(this.timerHeading).toBeVisible();
        await expect(this.timerResult).toHaveText(this.timerInitial);
    }

    async startTimer() {
        await this.timerButton.click();
    }

    async verifyProcessingState() {
        await expect(this.timerResult).toHaveText(this.timerProcessing);
    }

    async verifyCompleteState() {
        await expect(this.timerResult).toHaveText(this.timerComplete, { timeout: this.buttonLoadTimeout });
    }

    async runTimerOnce() {
        await this.startTimer();
        await this.verifyProcessingState();
        await this.verifyCompleteState();
    }

}

module.exports = { Playground }