import styled from '@emotion/styled';

import { useState } from 'react';

import { THEATER_TABS } from '@/constants';

const TabBar = () => {
	const [activeTab, setActiveTab] = useState(1);
	const handleTabClick = (tabId: number) => {
		setActiveTab(tabId);
	};

	return (
		<S.Wrapper>
			{THEATER_TABS.map(({ id, name }) => (
				<S.Tab $isActive={activeTab === id} onClick={() => handleTabClick(id)}>
					{name}
				</S.Tab>
			))}
			<S.BarLayout>
				<S.Bar $activeTab={activeTab} />
			</S.BarLayout>
		</S.Wrapper>
	);
};

const S = {
	Wrapper: styled.div`
		width: 100%;
		display: flex;
		padding: 0 1.4rem;
		box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.colors.GRAY05}; // border를 안쪽으로
		position: relative;
	`,
	Tab: styled.div<{ $isActive: boolean }>`
		width: 100%;
		padding: 1.1rem 0;
		white-space: nowrap;
		text-align: center;
		${({ theme }) => theme.typographies.n_head04}
		color: ${({ $isActive, theme }) => ($isActive ? theme.colors.RED02 : theme.colors.GRAY08)};
		cursor: pointer;
	`,
	BarLayout: styled.div`
		width: 100%;
		height: 0.2rem;
		padding: 0 1.4rem;
		position: absolute;
		top: 4rem; // 4.2rem - 0.2rem(Bar height값)
		left: 0;
	`,
	Bar: styled.span<{ $activeTab: number }>`
		width: calc(50% - 1.4rem);
		height: 0.2rem;
		background-color: ${({ theme }) => theme.colors.RED02};
		position: absolute;
		left: ${({ $activeTab }) => ($activeTab === 1 ? '1.4rem' : '50%')};
		transition: all 0.2s ease-in-out;
	`,
};

export default TabBar;
