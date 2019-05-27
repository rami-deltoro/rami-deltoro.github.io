export default class RadialContainerService {

    constructor(numberOfCallGoal) {
        this.numberOfCallGoal=numberOfCallGoal;
        this.drawRadialContainer(0);
    }

    drawRadialContainer(numberOfCallsTakenParameter) {
        const percentage = (numberOfCallsTakenParameter / this.numberOfCallGoal) * 100;
        console.log("percentage is :"+percentage);

        var radialContainer=jQuery("#radial-container");

        radialContainer.empty();
        radialContainer.radialProgress("init", {
            'size': 200,
            'fill': 10
        }).radialProgress("to", {'perc':percentage+0.1, 'time': 500});
    }

}