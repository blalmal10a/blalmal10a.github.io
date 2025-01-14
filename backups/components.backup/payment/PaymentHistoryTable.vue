<template>
    <div>
        <div
            v-if="!usePayment.phoneParameter"
            class="mb-16 flex justify-center"
        >
            <div style="width: min(400px, 100vw);">
                <form>
                    <label for="phone">Phone</label>
                    <input
                        placeholder="Enter your phone number"
                        required
                        minlength="10"
                        maxlength="10"
                        name="phone"
                        type="text"
                    >
                    <div class="text-center">
                        <button>submit</button>
                    </div>
                </form>
            </div>
        </div>
        <table
            v-if="usePayment.phoneParameter"
            style="width: 100%; margin-top: 3rem; "
            :style="`color:${usePayment.loading ? 'grey' : 'white'}`"
        >
            <thead>
                <tr>
                    <th>#Invoice</th>
                    <th>Date</th>
                    <th>Amount</th>

                    <th>Validity</th>
                    <th>
                        Download
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-if="usePayment.loading">

                    <tr>
                        <td colspan="5">
                            <div style="position: relative; padding-left: 0; 
                        display: flex; justify-content: center;">
                                <div class="table-loading"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            colspan="5"
                            style="position:  relative;"
                        >

                            <div class="absolute right-0 bottom-0 p-3">
                                Loading...
                            </div>
                        </td>
                    </tr>

                </template>
                <template v-if="!usePayment.loading">

                    <tr v-if="!usePayment.authUser">
                        <td colspan="5">
                            - No Payment histores found from +91 {{ usePayment.phoneParameter }} <br>
                            - All your payment histories will be
                            available, once the PAYMENT GATEWAY is ready <br>
                            - No payment links found with the phone number provided
                        </td>
                    </tr>
                    <template v-if="usePayment.authUser?.id">
                        <tr
                            v-for="(item, index) in userPayment.paymentHistories"
                            :key="index"
                        >
                            <td>
                                {{ item.invoice_no }}
                            </td>
                            <td>
                                {{ item.payment_date }}
                            </td>
                            <td>
                                {{ item.paid_amount }}
                            </td>
                            <td>
                                {{ item.validity }}
                            </td>
                        </tr>
                    </template>

                </template>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { onBeforeMount, onMounted, reactive } from 'vue'
const usePayment = reactive({
    phoneParameter: null,
    authUser: null,
    loading: false,
    paymentHistories: []
})

onMounted(() => {
    const query = new URL(window.location)
    usePayment.phoneParameter = query.searchParams.get('phone')
    getCustomer()
    getPaymentHistory()
});

async function onSubmit() {
    try {
        // window.location.href = 'https://pharmacy.sirukla.in/api/custoemrs/1'
        // document.location.href = ''
    } catch (error) {

    }
}

async function getPaymentHistory() {
    try {

        usePayment.loading = true;
        const res = await fetch(`https://pharmacy.sirukla.in/api/payment-histories?phone=9774888724`, {
            headers: {
                authorization: 'Bearer 64|t1qamnT64VI5qP5pSDxKIa9LjsyHoMhW6Z7JR76i',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(
            response => response.json()
        ).catch(
            (error) => console.log('.catch outer most', error)
        )
        usePayment.loading = false;

        console.log('res is: ', res)
    } catch (error) {
        usePayment.loading = false;
    }
}

async function getCustomer() {
    try {
        usePayment.loading = true;
        const res = await fetch(`https://pharmacy.sirukla.in/api/customers${usePayment.phoneParameter ? `/${usePayment.phoneParameter}` : ''}`, {
            headers: {
                // authorization: 'Bearer 64|t1qamnT64VI5qP5pSDxKIa9LjsyHoMhW6Z7JR76i',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(
            response => response.json()
        ).catch(
            (error) => console.log('.catch outer most', error)
        )
        usePayment.loading = false;
        console.log('res is: ', res)
    } catch (error) {
        usePayment.loading = false;
    }
}



// pharmacy.sirukla.in/api/customers
</script>

