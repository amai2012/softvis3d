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

import { MetricType } from "./MetricType";

export default class Metric implements SelectOptionValue {
    public readonly id: string;
    public readonly label: string;
    public readonly description: string;
    public readonly type: MetricType;

    constructor(
        id: string,
        label: string,
        description: string,
        type: MetricType = MetricType.UNKNOWN
    ) {
        this.id = id;
        this.label = label;
        this.description = description;
        this.type = type;
    }
}
