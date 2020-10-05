import React from "react"
import { storiesOf } from "@storybook/react"

import Header from "./Header"

const story = storiesOf("Components|Header", module)

story.add("Header Component", () => <Header siteTitle={"sample"} />)
