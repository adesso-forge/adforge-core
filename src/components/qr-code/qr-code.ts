// forge-qr-code — Pass-through registration
import '@awesome.me/webawesome/dist/components/qr-code/qr-code.js';
import { registerPassThrough } from '@adesso-forge/ds-shared/components/register';

registerPassThrough('wa-qr-code', 'forge-qr-code');
