import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        // 객체를 반환해야함
        return {
            open() {
                dialog.current.showModal()
            },
        };
    });

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You, {result}</h2>
            <p>
                목표시간은 <strong>{targetTime}초</strong>
            </p>
            <p>
                <strong>X초</strong> 남았는데 타이머를 멈췄음
            </p>

            <form method="dialog">
                <button>닫기</button>
            </form>
        </dialog>
    );
});

export default ResultModal;