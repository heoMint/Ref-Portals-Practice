import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2); // 소수점 두자리 수 까지만 표시
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    useImperativeHandle(ref, () => {
        // 객체를 반환해야함
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    return (
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your Score : {score}</h2>}
            <p>
                목표시간은 <strong>{targetTime}초</strong>
            </p>
            <p>
                <strong>{formattedRemainingTime}초</strong> 남았는데 타이머를 멈췄음
            </p>

            <form method="dialog" onSubmit={onReset}>
                <button>닫기</button>
            </form>
        </dialog>
    );
});

export default ResultModal;
