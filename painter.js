let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    addTools: (tool) => {
        painter.tools.push(tool)
    }
  }

  painter.addTools("paint")
  console.log(painter)