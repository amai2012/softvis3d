/*
 * SoftViz3d Sonar plugin
 * Copyright (C) 2013 Stefan Rinderle
 * stefan@rinderle.info
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02
 */
package de.rinderle.softviz3d.guice;

import com.google.inject.assistedinject.Assisted;
import de.rinderle.softviz3d.domain.LayoutViewType;
import de.rinderle.softviz3d.domain.MinMaxValue;
import de.rinderle.softviz3d.layout.bottomUp.SnapshotVisitor;
import org.sonar.api.config.Settings;

public interface SnapshotVisitorFactory {
  public SnapshotVisitor create(
    @Assisted Settings settings, @Assisted LayoutViewType viewType,
    @Assisted(value = "minMaxFootprintMetricValues") MinMaxValue minMaxFootprintMetricValues,
    @Assisted(value = "minMaxHeightMetricValues") MinMaxValue minMaxHeightMetricValues,
    @Assisted(value = "minMaxEdgeCounter") MinMaxValue minMaxEdgeCounter);
}
