'use strict';

class Systems extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
    if (this.state.liked) {
        return 'You liked this.';
    }

		const list = localStorage.getItem('list');
		const segmentsList = [];
		segmentsList.push(segments[parseInt(list)]);

    return (
      <div>
				{segmentsList.map((i, index) =>
					<div key={index} class="text-center bgCustomLightBlue titleCustom pt-4 pb-4 mt-4">
						<span>{i.phrase}</span>
					</div>
				)}
				{segmentsList[0].systems.map((i, index) =>
					index % 2 == 0 ?
					<div key={index} class="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-center bgCustomBlue mt-4 pt-4 pb-4">
						<div class="text-center mt-3 textBlockCustom">
							<div>
								<span class="titleCustom">
									{i.title}
								</span>
							</div>
							<div class="mt-3">
								<span class="textCustom">
									{i.text}
								</span>
							</div>
							<div class="mt-4">
								<a href={`knowMore/${i.knowMore}`} class="bgCustomLightBlue textCustom buttonCustom">Saiba mais</a>
							</div>
						</div>
						<picture>
							<img src={`../images/partners/${i.image}`} alt="" class="imageSizeCustom2 ml-lg-5"/>
						</picture>
					</div>
						:
					<div class="d-flex flex-column-reverse flex-lg-row-reverse align-items-center justify-content-center bgCustomLightBlue mt-4 pt-4 pb-4">
						<div class="text-center mt-3 textBlockCustom">
							<div>
								<span class="titleCustom">
									{i.title}
								</span>
							</div>
							<div class="mt-3">
								<span class="textCustom">
									{i.text}
								</span>
							</div>
							<div class="mt-4">
								<a href={`knowMore/${i.knowMore}`} class="bgCustomBlue textCustom buttonCustom">Saiba mais</a>
							</div>
						</div>
						<picture>
							<img src={`../images/partners/${i.image}`} alt="" class="imageSizeCustom2 mr-lg-5"/>
						</picture>
					</div>
				)}
			</div>
    );
}
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Systems/>, domContainer);
