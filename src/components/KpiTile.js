import React from "react"

import "./kpitile.css"

export function KpiTile({
	title,
	value,
	contribution,
	percentChange,
      changeDirection,
      selected,
	onClick,
}) {
	return (
		<div className={selected ? "container-selected" : "container"}
            onClick={() => onClick(title)}
            >
			<div className="measure-name">{title}</div>

                  <div className="measure-value">{value}</div>

                  <div className="changesMeasuresRow">
                        <div className={changeDirection === "up" ? "changeMeasure changeMeasureUp" : "changeMeasure changeMeasureDown"}>
                              {contribution}
                        </div>

                        <div className={changeDirection === "up" ? "changeMeasure changeMeasureUp" : "changeMeasure changeMeasureDown"}>
                              {percentChange}
                        </div>
                  </div>
		</div>
	)
}

{
	/* 
      <KpiTile
      title="SALES VALUE"
      value="R$5.823.489.124"
      contribution="-R$488.843"
      percentChange="-7,7%"
      changeDirection="down"
      onClick={this.setState({
            selectedTile: "SALES VALUE", // NOT EXACTLY
      })}
      /> 
*/
}
