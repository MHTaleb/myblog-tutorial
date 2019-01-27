import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { RfbfidilitySharedLibsModule, RfbfidilitySharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [RfbfidilitySharedLibsModule, RfbfidilitySharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [RfbfidilitySharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbfidilitySharedModule {
    static forRoot() {
        return {
            ngModule: RfbfidilitySharedModule
        };
    }
}
