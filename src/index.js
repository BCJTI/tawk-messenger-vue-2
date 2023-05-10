// Plugin
import VueTawkMessenger from './plugin';


const install = VueTawkMessenger.install;

VueTawkMessenger.install = (Vue, options) => {
	install.call(VueTawkMessenger, Vue, {
		...options
	});
};

export default VueTawkMessenger;