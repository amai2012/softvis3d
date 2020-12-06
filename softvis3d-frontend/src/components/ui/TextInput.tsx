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

import { ChangeEvent } from "react";
import * as React from "react";

type BoundChangeEvent = (
    event: ChangeEvent<HTMLInputElement>,
    src: React.Component<any, any>
) => void;

interface TextInputProps {
    id: string;
    label: string;
    onChange: BoundChangeEvent;
    value: string;
}

export class TextInput extends React.Component<TextInputProps, any> {
    public handleChange(event: ChangeEvent<HTMLInputElement>): void {
        this.props.onChange(event, this);
    }

    public render() {
        return (
            <div>
                <span>{this.props.label}</span>
                <input
                    type="text"
                    id={this.props.id}
                    name={this.props.id}
                    value={this.props.value}
                    className="text-input"
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}
