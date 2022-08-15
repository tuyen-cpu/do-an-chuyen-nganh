import { ProvincesApiService } from './../../services/provinces-api.service';
import { Province, District, Ward } from './../../model/province.model';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
@Component({
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        ReactiveFormsModule,
        RadioButtonModule,
        DropdownModule,
        InputTextareaModule,
        RippleModule,
        RouterModule,
        MessagesModule,
        MessageModule,
        ToastModule,
    ],
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
    providers: [MessageService],
    encapsulation: ViewEncapsulation.None,
})
export class CheckoutComponent implements OnInit {
    voucherInput: string;
    vouchers: any[] = [];
    isLoading = false;
    regexNumPhone: any = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    payment: any = 'PAYPAL';
    provinces: Province[];
    districts: District[];
    wards: Ward[];

    infoForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required, Validators.minLength(3)]],
        phoneNum: ['', [Validators.required, Validators.pattern(this.regexNumPhone)]],
        street: ['', [Validators.required, Validators.minLength(3)]],
        province: [null, Validators.required],
        district: [null, Validators.required],
        ward: [null, Validators.required],
        notes: [''],
    });
    constructor(
        private fb: FormBuilder,
        private primengConfig: PrimeNGConfig,
        private provincesApi: ProvincesApiService,
        private messageService: MessageService,
    ) {}

    ngOnInit(): void {
        this.primengConfig.ripple = true;
        this.getProvinces();
    }
    getProvinces() {
        this.provincesApi.getProvinces().subscribe({
            next: (provinces: Province[]) => {
                this.provinces = provinces;
            },
        });
    }
    onChangeProvince(e: any) {
        this.provincesApi.getDistricts(e.value.code).subscribe({
            next: (province: Province) => {
                this.districts = province.districts;
            },
        });
    }
    onChangeDistrict(e: any) {
        this.provincesApi.getCommunes(e.value.code).subscribe({
            next: (district: District) => {
                this.wards = district.wards;
            },
        });
    }
    onSubmit() {
        console.warn(this.infoForm.value);
    }
    onCheckVoucher() {
        this.isLoading = true;
        if (this.voucherInput.length > 20) {
            this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: 'Mã không hợp lệ' });
            this.isLoading = false;
            return;
        }

        setTimeout(() => {
            this.vouchers.push(this.voucherInput);
            this.isLoading = false;
        }, 1000);
    }
    onRemoveVoucher(voucher: string) {
        this.vouchers = this.vouchers.filter((v) => v !== voucher);
    }
    get email() {
        return this.infoForm.get('email');
    }
    get name() {
        return this.infoForm.get('name');
    }
    get phoneNum() {
        return this.infoForm.get('phoneNum');
    }
    get street() {
        return this.infoForm.get('street');
    }
    get province() {
        return this.infoForm.get('province');
    }
    get notes() {
        return this.infoForm.get('notes');
    }
}
