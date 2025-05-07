"use client"
import { useDispatch, useSelector } from 'react-redux';
import { toggleHint } from '@/app/Store/hintSlice';
import { RootState } from '@/app/Store/store';
import { Checkbox } from '@/components/ui/checkbox';

function Hint() {
    const dispatch = useDispatch();
    const isHintVisible = useSelector((state: RootState) => state.hint.isHintVisible);
    return (
        <div className="items-center justify-center p-5  flex space-x-2">
            <Checkbox
                id="hint-toggle"
                checked={isHintVisible}
                onCheckedChange={() => dispatch(toggleHint())}
                className="p-3"
            />
            <label
                htmlFor="hint-toggle"
                className="text-5xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Hint
            </label>
        </div>
    )
}

export default Hint