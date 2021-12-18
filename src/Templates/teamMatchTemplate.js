import { ID } from '../Utils/constants.js';

export const teamMatchTemplate = {
  topSelect: `
        <section>
            <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
            <form>
            <select id=${ID.COURSE_SELECT}>
                <option value="frontend">프론트엔드</option>
                <option value="backend">백엔드</option>
            </select>
            <select id=${ID.MISSION_SELECT}>
                <option value="baseball">숫자야구게임</option>
                <option value="racingcar">자동차경주</option>
                <option value="lotto">로또</option>
                <option value="shopping-cart">장바구니</option>
                <option value="payments">결제</option>
                <option value="subway">지하철노선도</option>
                <option value="performance">성능개선</option>
                <option value="deploy">배포</option>
            </select>
            <button id=${ID.SHOW_TEAM_MATCHER_BUTTON}>확인</button>
            </form>
        </section>
        <div id=${ID.TEAM_MATCH_BODY_MAIN}></div>
    `,
  bodyMain: `
        <section>
            <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
            <div>
            <div>
                <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
                <form>
                <label>1팀당 인원 수</label>
                <input type="number" id=${ID.TEAM_MEMBER_COUNT_INPUT} />
                <button id=${ID.MATCH_TEAM_BUTTON} >팀 매칭</button>
                </form>
            </div>
            <h4>크루 목록</h4>
            <ul id=${ID.CREW_LIST}>
            </ul>
            </div>
        </section>
        <!-- 팀 매칭이 된 경우 -->
        `,
  matchedMain: `
        <section>
            <h3>프론트엔드 숫자야구게임 조회</h3>
            <p>팀이 매칭되었습니다.</p>
            <ul id=${ID.TEAM_MATCH_RESULT}>
            </ul>
            <p>
            팀을 재매칭 하시겠습니까?
            <button id=${ID.REMATCH_TEAM_BUTTON}>재매칭</button>
            </p>
        </section>
        `,
};