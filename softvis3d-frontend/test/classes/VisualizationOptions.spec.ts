///
/// softvis3d-frontend
/// Copyright (C) 2016 Stefan Rinderle and Yvo Niedrich
/// stefan@rinderle.info / yvo.niedrich@gmail.com
///
/// This program is free software; you can redistribute it and/or
/// modify it under the terms of the GNU Lesser General Public
/// License as published by the Free Software Foundation; either
/// version 3 of the License, or (at your option) any later version.
///
/// This program is distributed in the hope that it will be useful,
/// but WITHOUT ANY WARRANTY; without even the implied warranty of
/// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
/// Lesser General Public License for more details.
///
/// You should have received a copy of the GNU Lesser General Public
/// License along with this program; if not, write to the Free Software
/// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02
///
import {assert, expect} from "chai";
import BuildingColorTheme from '../../src/classes/BuildingColorTheme';
import Layout from "../../src/classes/Layout";
import Metric from "../../src/classes/Metric";
import Scale from "../../src/classes/Scale";
import VisualizationOptions from "../../src/classes/VisualizationOptions";
import {DEFAULT_BUILDING_COLOR_THEME} from '../../src/constants/BuildingColorThemes';
import {district, evostreet} from "../../src/constants/Layouts";
import {
    complexityMetricId,
    coverageColorMetric,
    linesOfCodeMetricId,
    noColorMetric,
    noMetricId
} from "../../src/constants/Metrics";
import {EXPONENTIAL, LOGARITHMIC, Scales} from "../../src/constants/Scales";

describe("VisualizationOptions", () => {

    it("should construct config", () => {
        let metricWidth: Metric = new Metric(complexityMetricId, " -- None -- ", "");
        let metricHeight: Metric = new Metric(linesOfCodeMetricId, " -- None -- ", "");
        let metricColor: Metric = coverageColorMetric;
        let scalingMethod: Scale = Scales.availableScales[0];
        let layout: Layout = evostreet;
        let buildingColorTheme: BuildingColorTheme = DEFAULT_BUILDING_COLOR_THEME;

        let result: VisualizationOptions =
            new VisualizationOptions(layout, metricWidth, metricHeight, metricColor, scalingMethod, buildingColorTheme);

        expect(result.layout).to.be.eq(layout);
        expect(result.footprint).to.be.eq(metricWidth);
        expect(result.height).to.be.eq(metricHeight);
        expect(result.metricColor).to.be.eq(metricColor);
        expect(result.scale).to.be.eq(scalingMethod);
        expect(result.buildingColorTheme).to.be.eq(buildingColorTheme);
    });

    it("should create default config", () => {
        let metricColor: Metric = noColorMetric;
        let scalingmethod: Scale = LOGARITHMIC;
        let layout: Layout = district;

        let result: VisualizationOptions = VisualizationOptions.createDefault();

        expect(result.layout).to.be.eq(layout);
        expect(result.footprint.id).to.be.eq(noMetricId);
        expect(result.height.id).to.be.eq(noMetricId);
        expect(result.metricColor).to.be.eq(metricColor);
        expect(result.scale).to.be.eq(scalingmethod);
        expect(result.buildingColorTheme).to.be.eq(DEFAULT_BUILDING_COLOR_THEME);
    });

    it("should check equals without color", () => {
        let exampleMetric: Metric = new Metric(noMetricId, "", "");
        let result: VisualizationOptions =
            new VisualizationOptions(evostreet, exampleMetric, exampleMetric, noColorMetric, LOGARITHMIC, DEFAULT_BUILDING_COLOR_THEME);

        assert(result.equalStructure(result));

        let copy: VisualizationOptions =
            new VisualizationOptions(evostreet, exampleMetric, exampleMetric, noColorMetric, LOGARITHMIC, DEFAULT_BUILDING_COLOR_THEME);

        assert(result.equalStructure(copy));
        assert(copy.equalStructure(result));

        copy.metricColor = coverageColorMetric;

        assert(result.equalStructure(copy));
        assert(copy.equalStructure(result));

        copy.scale = EXPONENTIAL;

        expect(result.equalStructure(copy)).to.be.false;
        expect(copy.equalStructure(result)).to.be.false;
    });

});