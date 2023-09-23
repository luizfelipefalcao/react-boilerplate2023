import styled from 'styled-components';

export const HeaderNav = styled.div`
	display: flex;
	justify-content: center;

  @media (width < 576px) {
	padding: 0.1em .8em;
	padding-right: 0;
  }

  @media (576px <= width <= 767px) {
	margin-left: 2em;
	margin-right: 2em;
  }


@media (768px <= width <= 991px) {
	margin-left: 6em;
	margin-right: 6em;
  }

  @media (width > 991px) {
	margin-left: 12em;
	margin-right: 12em;
  }
`;
  

