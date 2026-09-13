(() => {
  const whatsappNumber = '919444206973';

  window.getProductInquiryUrl = (productName, { variant = '', message = '' } = {}) => {
    const variantLine = variant ? `\n\nVariant: ${variant}.` : '';
    const defaultMessage = `Hello Sri Ambal Traders,

I’m interested in your ${productName}.

I would like to know more about the available printing options (IML Printing / Screen Printing), sizes, designs and pricing.${variantLine}

Please share the details.

Thank you.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message || defaultMessage)}`;
  };

  document.querySelectorAll('[data-product-inquiry]').forEach(button => {
    const productName = button.dataset.productInquiry;
    const variant = button.dataset.productVariant || '';
    const message = button.dataset.inquiryMessage || '';
    button.href = window.getProductInquiryUrl(productName, { variant, message });
  });
})();
