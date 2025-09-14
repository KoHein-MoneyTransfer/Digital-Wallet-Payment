// Data for all payment methods
const paymentData = {
    wavepay: {
        title: 'Wave Pay အကောင့်များ',
        accounts: [
            { mainName: 'Wave Pay', accountName: 'Hein Hsan', number: '09966674258', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/Wave%20Pay%20Logo.jpg', qr: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/Wave%20Pay%20QR.jpg', qrNote: 'Wave Pay Userအကောင့်များ ငွေလွှဲ 50L အထက် Limit ကျော်လွှဲလိုပါက ဤ QR Code ကို Scan ဖတ်၍ လွှဲပြောင်းနိုင်ပါသည်။ Note:တွင်(Buy Phone)ဟုရေးပေးပါ ခင်ဗျာ။' }
        ]
    },
    kbzpay: {
        title: 'KBZ Pay အကောင့်များ',
        accounts: [
            { mainName: 'KBZ Pay', accountName: 'Hein Hsan', number: '09777725086', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/KBZ%20Pay.jpg', qr: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/KBZ%20Pay%20MMQR.jpg', qrNote: 'KBZ Pay Merchant QR မှငွေလွှဲလိုပါက ဤ QR Code ကို Scan ဖတ်၍ လွှဲပြောင်းနိုင်ပါသည်။ Note:တွင်(Buy Phone)ဟုရေးပေးပါ ခင်ဗျာ။' }
        ]
    },
    ayapay: {
        title: 'AYA Pay အကောင့်များ',
        accounts: [
            { mainName: 'AYA Pay', accountName: 'Hein Hsan', number: '09777725086', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/AYA%20Pay.jpeg', qr: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/AYA%20Pay%20Merchant%20QR.jpg', qrNote: 'AYA Pay မှ ငွေလွှဲ 50L အထက် Limit ကျော်လွှဲလိုပါက ဤ Merchant QR Code ကို Scan ဖတ်၍ လွှဲပြောင်းနိုင်ပါသည်။ Note:တွင်(Buy Phone)ဟုရေးပေးပါ ခင်ဗျာ။' }
        ]
    },
    kbzbank: {
        title: 'KBZ Bank အကောင့်များ',
        accounts: [
            { mainName: 'KBZ Bank Special', accountName: 'Hein Hsan', number: '24313724300197901', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/KBZ%20Bank.jpg' }
        ]
    },
    ayabank: {
        title: 'AYA Bank အကောင့်များ',
        accounts: [
            { mainName: 'AYA Bank Special', accountName: 'Hein Hsan', number: '40035991319', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/AYA%20Bank.png' },
            { mainName: 'AYA Bank ရိုးရိုး', accountName: 'Hein Hsan', number: '20024086745', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/AYA%20Bank.png' }
        ]
    },
    yomabank: {
        title: 'Yoma Bank အကောင့်များ',
        accounts: [
            { mainName: 'Yoma Bank Flexi', accountName: 'Hein Hsan', number: '005511108021168', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/Yoma%20Flexi.png' }
        ]
    },
    cbpay: {
        title: 'CB Bank အကောင့်များ',
        accounts: [
            { mainName: 'CB Bank Special', accountName: 'Hein Hsan', number: '0092100900000841', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/CB%20Pay.jpg' },
            { mainName: 'CB Bank ရိုးရိုး', accountName: 'Hein Hsan', number: '0092600500007757', logo: 'https://raw.githubusercontent.com/KoHein-MoneyTransfer/images/refs/heads/main/CB%20Pay.jpg' }
        ]
    }
};

// Functions that work on both pages
function copyToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('နံပါတ်ကို ကူးယူပြီးပါပြီ။');
}

function updateDateTime() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('my-MM', { year: 'numeric', month: 'long', day: 'numeric' });
    const timeStr = now.toLocaleTimeString('my-MM');
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.textContent = `${dateStr} | ${timeStr}`;
    }
}

function toggleQrDisplay(elementId) {
    const qrContainer = document.getElementById(elementId);
    qrContainer.style.display = qrContainer.style.display === 'flex' ? 'none' : 'flex';
}

// Function to handle the second page (payment-details.html)
function loadPaymentDetails() {
    const params = new URLSearchParams(window.location.search);
    const method = params.get('method');
    const accountInfoDiv = document.getElementById('account-info');
    const pageTitle = document.getElementById('page-title');

    if (!method || !paymentData[method]) {
        if(accountInfoDiv) {
            accountInfoDiv.innerHTML = '<p>အချက်အလက်ရှာမတွေ့ပါ။</p>';
        }
        if(pageTitle) {
            pageTitle.textContent = 'အမှားတစ်ခုခုဖြစ်ပေါ်ခဲ့သည်။';
        }
        return;
    }

    const details = paymentData[method];
    if(pageTitle) {
        pageTitle.textContent = details.title;
    }

    let htmlContent = '';
    details.accounts.forEach((account, index) => {
        const hasQr = account.qr ? `<button class="btn qr-btn" onclick="toggleQrDisplay('qr-container-${method}-${index}')">QR Code ပြရန်</button>` : '';
        const qrContainer = account.qr ? `
            <div id="qr-container-${method}-${index}" class="qr-display-container">
                <img src="${account.qr}" alt="${account.mainName} QR Code">
                <p>${account.qrNote}</p>
            </div>
        ` : '';

        htmlContent += `
            <div class="account-card">
                <div class="account-content">
                    <img src="${account.logo}" class="account-logo" alt="${account.mainName} Logo">
                    <div class="account-details">
                        <strong>${account.mainName}</strong>
                        <span>Account Name: <b>${account.accountName}</b></span><br>
                        <span>Account Number: <b>${account.number}</b></span>
                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn copy-btn" onclick="copyToClipboard('${account.number}')">📋 Copy</button>
                    ${hasQr}
                </div>
                ${qrContainer}
            </div>
        `;
    });

    if(accountInfoDiv) {
        accountInfoDiv.innerHTML = htmlContent;
    }
}

// Check which page is loaded and run the appropriate function
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    if (document.title.includes('အကောင့်အချက်အလက်များ')) {
        loadPaymentDetails();
    }
});

setInterval(updateDateTime, 1000);
