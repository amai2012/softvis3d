///
/// softvis3d-frontend
/// Copyright (C) 2020 Stefan Rinderle and Yvo Niedrich
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

import { lazyInject } from "../../inversify.config";
import BaseScmCalculatorService from "./BaseScmCalculatorService";
import SonarQubeApiScm from "./SonarQubeApiScm";
import ComponentStatusStore from "../../stores/ComponentStatusStore";

export default class ScmCommitsCalculatorService extends BaseScmCalculatorService {
    @lazyInject("ComponentStatusStore")
    private readonly componentStatusStore!: ComponentStatusStore;

    public calcNumberOfCommits(measures: SonarQubeApiScm[]): number {
        console.log("HERE");
        measures = measures.filter(this.isAfterLeakPeriod.bind(this));

        const groupByCommits = this.groupBy(measures, (item) => {
            return item.lastCommitRevision;
        });

        return groupByCommits.size;
    }

    private isAfterLeakPeriod(item: SonarQubeApiScm) {
        if (this.componentStatusStore.leakPeriodDate) {
            return (
                new Date(item.lastCommit).getTime() >=
                this.componentStatusStore.leakPeriodDate.getTime()
            );
        } else {
            return true;
        }
    }
}
