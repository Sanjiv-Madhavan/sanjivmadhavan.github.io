import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdOutlineWorkOutline } from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    return (
        <div className="mt-5">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
                    date="2004 - 2014"
                    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h4 className="vertical-timeline-element-title">
                        Lorem Ipsum,
                    </h4>
                    <h4 className="vertical-timeline-element-subtitle mt-2">
                        dolor sit amet
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis ullamcorper nibh. Vestibulum pretium luctus accumsan. In eleifend vel tellus non dictum. Aenean sapien nunc, vehicula ac rhoncus ac, mattis eu dui. Duis venenatis magna a est blandit, ac ornare nibh lobortis. Sed sit amet porta elit, quis aliquet augue. Nullam vitae nibh commodo, bibendum tellus sit amet, egestas neque. In tempus, turpis pulvinar malesuada vestibulum, turpis metus venenatis sapien, ut lacinia tellus dui in velit. Fusce ullamcorper pellentesque libero, in tincidunt sem porttitor at. Duis nibh erat, fringilla a rhoncus eu, suscipit eget orci. Nunc vitae semper nibh. Morbi eu sapien et justo consectetur blandit.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
                    date="2014 - 2018"
                    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h4 className="vertical-timeline-element-title">
                        Lorem Ipsum,
                    </h4>
                    <h4 className="vertical-timeline-element-subtitle mt-2">
                        dolor sit amet
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis ullamcorper nibh. Vestibulum pretium luctus accumsan. In eleifend vel tellus non dictum. Aenean sapien nunc, vehicula ac rhoncus ac, mattis eu dui. Duis venenatis magna a est blandit, ac ornare nibh lobortis. Sed sit amet porta elit, quis aliquet augue. Nullam vitae nibh commodo, bibendum tellus sit amet, egestas neque. In tempus, turpis pulvinar malesuada vestibulum, turpis metus venenatis sapien, ut lacinia tellus dui in velit. Fusce ullamcorper pellentesque libero, in tincidunt sem porttitor at. Duis nibh erat, fringilla a rhoncus eu, suscipit eget orci. Nunc vitae semper nibh. Morbi eu sapien et justo consectetur blandit.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
                    date="2019 - 2023"
                    iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
                    icon={<MdOutlineWorkOutline />}
                >
                    <h4 className="vertical-timeline-element-title">
                        Lorem Ipsum,
                    </h4>
                    <h4 className="vertical-timeline-element-subtitle mt-2">
                        dolor sit amet
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis ullamcorper nibh. Vestibulum pretium luctus accumsan. In eleifend vel tellus non dictum. Aenean sapien nunc, vehicula ac rhoncus ac, mattis eu dui. Duis venenatis magna a est blandit, ac ornare nibh lobortis. Sed sit amet porta elit, quis aliquet augue. Nullam vitae nibh commodo, bibendum tellus sit amet, egestas neque. In tempus, turpis pulvinar malesuada vestibulum, turpis metus venenatis sapien, ut lacinia tellus dui in velit. Fusce ullamcorper pellentesque libero, in tincidunt sem porttitor at. Duis nibh erat, fringilla a rhoncus eu, suscipit eget orci. Nunc vitae semper nibh. Morbi eu sapien et justo consectetur blandit.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
                    icon={<MdOutlineWorkOutline />}
                />
            </VerticalTimeline>
        </div>
    )
}