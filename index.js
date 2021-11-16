exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		cursorColor: '#FEBD29',
		cursorShape: 'BEAM',
		cursorBlink: true,
		backgroundColor: '#0A273A',
		foregroundColor: '#ffffff',
		selectionColor: 'rgba(255, 255, 255, 0.3)',
		css: `${config.css || ''}
			.tabs_nav .tabs_list .tab_text {
				color: '#ffffff';
			}
			.tabs_nav .tabs_title {
				color: '#ffffff';
			}
			.tab_tab {
				border-left: none;
				border-color: #11242F !important;
			}
			.tabs_borderShim {
				border-color: #11242F !important;
			}
			.tab_active {
				border-bottom-width: 1px;
				border-bottom-style: solid;
				border-bottom-color: #FEBD29 !important;
				background: #0F354B;
			}
		`
	});
}
